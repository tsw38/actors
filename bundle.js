'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var puppeteer = _interopDefault(require('puppeteer'));

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
      console.log('MANUALLY GET THIS CELEBRITY PLEASE', `https://www.rottentomatoes.com/search/?search=${celebrity.replace(/\-/, '+')}`);
      await browser.close();
      return;
    }
  }

  let tableHead = await page.$$eval('#filmographyTbl thead th', nodes => nodes.map(node => node.innerText.replace('\t', '')));
      tableHead.splice(2,1);

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

  console.warn(tableHead);
  console.warn(JSON.stringify(movies));

  await page.screenshot({path: `${celebrity}.png`});

  await browser.close();
}

headless('Bradley Cooper');
