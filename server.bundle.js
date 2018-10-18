'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var puppeteer = _interopDefault(require('puppeteer'));
var express = _interopDefault(require('express'));
var bodyParser = _interopDefault(require('body-parser'));
require('path');
var morgan = _interopDefault(require('morgan'));
var chalk = _interopDefault(require('chalk'));
var dotenv = _interopDefault(require('dotenv'));

async function headless(celebrity = ''){
  if(!celebrity) return;
  celebrity     = celebrity.trim().toLowerCase().replace(/\s+/g, '_');
  const browser = await puppeteer.launch();
  const page    = await browser.newPage();

  await page.goto(`https://www.rottentomatoes.com/celebrity/${celebrity}`);
  let pageCheck = await page.$eval('#main_container', container => container.innerText);

  if((/(404.+)not\sfound/gi).test(pageCheck)){
    celebrity = celebrity.replace(/\_/g, '-');

    await page.goto(`https://www.rottentomatoes.com/celebrity/${celebrity}`);
    pageCheck = await page.$eval('#main_container', container => container.innerText);

    // the second test is not there
    if((/(404.+)not\sfound/gi).test(pageCheck)){
      await browser.close();
      return {
        status: 404,
        message: `https://www.rottentomatoes.com/search/?search=${celebrity.replace(/\-/, '+')}`
      }
    }
  }

  // let tableHead = await page.$$eval('#filmographyTbl thead th', nodes => nodes.map(node => node.innerText.replace('\t', '')));
  //     tableHead.splice(2,1);

  let movies = await page.$$eval('#filmographyTbl tbody tr', movies => movies.map(movie => {
      let columns = movie.innerText.split('\t').map(column => column.replace(/\n/g, ''));
      let role = movie
        .innerText
        .split('\t')[2]
        .split('\n')
        .filter(elem => elem.length)
        .map(str => {
          if((/producer/i).test(str)){ str = 'Producer'; }
          else if((/screenwriter/i).test(str)){ str = 'Screenwriter'; }
          else if((/director/i).test(str)){ str = 'Director'; }
          else { str = "Actor"; }
          return str;
        });

      return {
        role,
        title: columns[1],
        year: Number(columns[4]),
        rating: columns[0].replace(/\%/g, ''),
        boxOffice: (/[0-9]/g).test(columns[3]) ? columns[3] : null
      };
  }));

  // await page.screenshot({path: `${celebrity}.png`});
  await browser.close();

  return {
    status: 200,
    message: JSON.stringify(movies)
  }
}

var html = (req,res,next) => ({celebrity = '', fromServer={}} = {}) => {
  celebrity = celebrity.split(' ')
    .map(name => name.charAt(0).toUpperCase() + name.substr(1, name.length))
    .join(' ');
  fromServer.celebrity = celebrity;

  res.send(`
    <!DOCTYPE html>
    <html>
    	<head>
    		<meta charset="UTF-8">
    		<title>${celebrity ? celebrity + ' ' : ''}Rating Over Time</title>
        <script>window.STATE = ${JSON.stringify(fromServer)};</script>
    	</head>
    	<body>
      ${celebrity.length ? (`<a href="/">&lt; Return</a><div id="chart-container"></div>`) : (
        `<form method="GET" action="/search">
    			Celebrity or Director:<br>
    			<input type="text" name="celebrity"><br>
    			<input type="submit" value="Submit">
    		</form>`
      )}
    	</body>
    	<script
    		src="https://code.jquery.com/jquery-2.2.4.min.js"
    		integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44="
    		crossorigin="anonymous"></script>
    	<script
    		type="text/javascript"
    		src="https://www.gstatic.com/charts/loader.js"></script>
      <script>
    		$(() => {
          if(!window.STATE) return;

          $('form').on('submit', e => {
            $('body').append('<div class="loading" style="text-align:center; font-size:50px">Loading</div>');
          })

          if(STATE.status === 200){
            var serverData = JSON.parse(STATE.message)
              .filter(movie => !(/[a-zA-Z]/g).test(movie.rating))
              .map(movie => [movie.year, Number(movie.rating), movie.title + ' (' + movie.year + ') ' + '['+ movie.rating +'%]']);

            // Load the Visualization API and the corechart package.
            google.charts.load('current', {'packages':['corechart']});

            // Set a callback to run when the Google Visualization API is loaded.
            google.charts.setOnLoadCallback(drawChart);

            // Callback that creates and populates a data table,
            // instantiates the pie chart, passes in the data and
            // draws it.
            function drawChart() {
              // Create the data table.
              var data = new google.visualization.arrayToDataTable([['Year', 'Rating', {type: 'string', role: 'tooltip'}], ...serverData]);

              // Set chart options
              var options = {
                title: STATE.celebrity + ' RT Over Time',
                hAxis: {title: 'Year', format: '0000'},
                vAxis: {title: 'Rating', minValue: 0, maxValue: 100},
                width: 1000,
                height: 500,
                legend: 'none',
                trendlines: { 0: {} }    // Draw a trendline for data series 0.
              };

              // Instantiate and draw our chart, passing in some options.
              var chart = new google.visualization.ScatterChart(document.getElementById('chart-container'));
              chart.draw(data, options);
            }
          }
          else if(STATE.status === 404){
            $('body').append(STATE.message);
          }
    		})
    	</script>
    </html>
    `);
};

dotenv.config();

express()
.use(bodyParser.json())
.use(bodyParser.urlencoded({extended:true}))
.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'))
.use((req,res,next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,POST,PATCH');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
})
.get('/', (req,res) => html(req,res)())
.get('/search', async (req,res) => {
	const results = await headless(req.query.celebrity);
	return html(req,res)({
		fromServer: results,
		celebrity: req.query.celebrity
	});
})
.listen(process.env.HTTP_PORT,'0.0.0.0', () => {
	console.log(chalk.magenta(`VERSION NUMBER: ${process.env.VERSION_NUMBER}`));
	console.log(chalk.green(`${process.env.origin} is live PID:${process.pid}`));
});
