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
