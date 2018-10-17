import puppeteer from 'puppeteer';

export default async function headless(celebrity = ''){
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
        rating: columns[0].replace(/\%/g, ''),
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
