import cacheSearch from '../helpers/cacheSearch.js';
import rottenSearch from '../helpers/rottenSearch.js';
import cacheInsert from '../helpers/cacheInsert.js';

export default async (req, res, next) => {
	const celebrity = req.query.celebrity;
	
	let results = await cacheSearch(celebrity);

	if (results.status === 404) {
		results = await rottenSearch(celebrity);

		if (Array.isArray(results.data)) {
			const inserted = await cacheInsert({results, celebrity});
		} else {
			//couldnt find the celebrity, do the search yourself.
		}
	}

  res.json({
    celebrity,
    results
  });
}
