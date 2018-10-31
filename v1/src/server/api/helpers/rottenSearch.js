import cheerio from 'cheerio';
import curl from 'curl';

import atob from 'atob';

import  { Variables } from 'utils';

export default async function headless(celebrity = ''){
  if(!celebrity) return;
  celebrity = atob(celebrity)
    .trim().toLowerCase()
    .replace(/\s+/g, '_')
    .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');

  let markup;
  for (let i = 0; i <= 1; i++) {
    try {
      markup = await Variables.axios(`https://www.rottentomatoes.com/celebrity/${celebrity}`);
      break;
    } catch (e) {
      if (i === 0) {
        celebrity = celebrity.replace(/\_/g, '-');
      } else {
        console.warn('celebrity needs to be manually inserted');
      }
    }
  }

  if(markup) {
    markup = markup.data;
    let $ = cheerio.load(markup);

    let movies = $('#filmographyTbl tbody tr').map((i, movie) => {
      const columns = $(movie).find('td').map((ind, cell) => {
        const text = $(cell).text().trim().replace(/\s{2,}/g,'|');
        return text;
      }).get();

        let role = columns[2].split('|')
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
    }).get();

    return {
      status: 200,
      data: movies
    }
  }

  return {
    status: 404,
    data: `https://www.rottentomatoes.com/search/?search=${celebrity.replace(/\-/, '+')}`
  }
}
