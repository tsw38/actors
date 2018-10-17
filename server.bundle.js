'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var puppeteer = _interopDefault(require('puppeteer'));
var express = _interopDefault(require('express'));
var bodyParser = _interopDefault(require('body-parser'));
var path = _interopDefault(require('path'));
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
      var columns = movie.innerText.split('\t').map(column => column.replace(/\n/g, ''));
          columns.splice(2,1);

      return {
        rating: Number(columns[0].replace(/\%/g, '')),
        title: columns[1],
        boxOffice: (/[0-9]/g).test(columns[2]) ? columns[2] : null,
        year: Number(columns[3])
      };
  }));

  // await page.screenshot({path: `${celebrity}.png`});
  await browser.close();

  return {
    status: 200,
    message: JSON.stringify(movies)
  }
}

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
.use('/', express.static((path.join(__dirname, 'src/client'))))
.post('/', async (req,res) => {
	const results = await headless(req.body.celebrity);
	res.json(results);
})
.listen(process.env.HTTP_PORT,'0.0.0.0', () => {
	console.log(chalk.magenta(`VERSION NUMBER: ${process.env.VERSION_NUMBER}`));
	console.log(chalk.green(`${process.env.origin} is live PID:${process.pid}`));
});
