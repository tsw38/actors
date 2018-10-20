'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var puppeteer = _interopDefault(require('puppeteer'));
var mysql = _interopDefault(require('mysql2/promise'));
var atob = _interopDefault(require('atob'));
var btoa = _interopDefault(require('btoa'));
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
        data: `https://www.rottentomatoes.com/search/?search=${celebrity.replace(/\-/, '+')}`
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
    data: movies
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
            var serverData = STATE.data
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
            $('body').append(STATE.data);
          }
    		})
    	</script>
    </html>
    `);
};

var cacheSearch = async (celebrity) => {
  const connection = await mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    database:process.env.DB_NAME
  });

  let data = await connection.query(`
    SELECT
      C.name as name,
      M.name as movie,
      rating,
      R.name as role,
      year,
      boxOffice
    FROM
      celebrity as C
    JOIN
      rolesToCelebToMovie as RCM ON C.id = RCM.celebId
    JOIN
      movie as M ON RCM.movieId = M.name
    JOIN
      roles as R ON RCM.roleId = R.id
    WHERE 1=1
      and C.name="${celebrity}";`);

  let movies = {};

  const result = data[0].forEach(({movie, rating, role, year, boxOffice}) => {
    const movieName = atob(movie);

    if (movies[movieName]) {
      console.warn(movieName, movies[movieName].role, role);
      movies[movieName] = {
        ...movies[movieName],
        role: [...new Set(movies[movieName].role.concat(role))]
      };
    } else { // movie doesnt exist, insert it.
      movies[movieName] = {
        rating, year, boxOffice,
        role: [role]
      };
    }
  });



  return {
    status: data[0].length ? 200 : 404,
    data: Object.keys(movies).map(movie => {
      return {
        ...(movies[movie]),
        title: movie
      }
    })
  }
};

var cacheInsert = async ({results, celebrity}) => {
  const connection = await mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    database:process.env.DB_NAME
  });
  console.warn(celebrity.toLowerCase());
  const celebrityInsert = await connection.query(`INSERT IGNORE INTO celebrity (name) VALUES ('${celebrity.toLowerCase()}');`);
  const celebrityKey    = celebrityInsert[0].insertId;

  const insertMoviesQuery = "INSERT IGNORE INTO movie (name, rating, year, boxOffice) VALUES ?";
  const values = results.data
    .filter(movie => !isNaN(movie.rating))
    .map(({title, rating, year, boxOffice}) => [
      btoa(title),
      Number(rating),
      year,
      boxOffice ? boxOffice : '0'
  ]);
  const inserted1 = await connection.query(insertMoviesQuery, [values]);

  const insertCelebToMovieQuery = "INSERT IGNORE INTO celebToMovie (celebId, movieId) VALUES ?";
  const insertCelebToMovieQueryValues = values
    .map(movie => [
      celebrityKey,
      movie[0]
  ]);
  const inserted2 = await connection.query(insertCelebToMovieQuery, [insertCelebToMovieQueryValues]);

  let selectedRoles = await connection.query('SELECT * FROM roles');
  selectedRoles     = selectedRoles[0];

  const insertCelebAndRoles = 'INSERT IGNORE INTO rolesToCelebToMovie (celebId, roleId, movieId) VALUES ?';
  const insertrolesToCelebToMovieQueryValues = results.data
    .map(movie => {
      let roleAsIdArr = movie.role.map(elem => selectedRoles.find(role => role.name === elem).id);
      return roleAsIdArr.map(role => [
        celebrityKey,
        role,
        btoa(movie.title)
      ])
  }).reduce((newArr, result) => { //some reason it is an array of arrays in array, fix that
    if (Array.isArray(result) && Array.isArray(result[0])){
      result.forEach(temp => {newArr.push(temp);});
    } else { newArr.push(result); }
    return newArr;
  }, []);

  const inserted3 = await connection.query(insertCelebAndRoles, [insertrolesToCelebToMovieQueryValues]);



  return inserted1;

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
	let results = await cacheSearch(req.query.celebrity.toLowerCase());

	if (results.status === 404) {
		results = await headless(req.query.celebrity);

		if (Array.isArray(results.data)) {
			const inserted = await cacheInsert({results, celebrity: req.query.celebrity});
		}
	}
	return html(req,res)({
		fromServer: results,
		celebrity: req.query.celebrity
	});
})
.listen(process.env.HTTP_PORT,'0.0.0.0', () => {
	console.log(chalk.magenta(`VERSION NUMBER: ${process.env.VERSION_NUMBER}`));
	console.log(chalk.green(`${process.env.origin} is live PID:${process.pid}`));
});
