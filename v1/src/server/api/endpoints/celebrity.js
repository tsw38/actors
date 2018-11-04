import getCelebrities from '../helpers/getCelebrities.js';

export default async (req, res, next) => {
	let results = await getCelebrities();

	const celebrities = results.data.reduce((celebs, celeb) => {
		const thisCeleb = celebs[celeb.name] || {};

		thisCeleb.movies = thisCeleb.movies ? [
			...thisCeleb.movies,
			...(!thisCeleb.movies.includes(celeb.movie) && [celeb.movie])
		] : [];

		//there might be a problem with this TODO: fix
		thisCeleb.ratings = thisCeleb.ratings ? [
			...thisCeleb.ratings,
			...(thisCeleb.movies && thisCeleb.movies.includes(celeb.movie) && [
				celeb.rating
			])
		] : [];

		thisCeleb.lastUpdated  = thisCeleb.lastUpdated || celeb.lastUpdated;

		celebs[celeb.name] = thisCeleb;
		return celebs;
	}, {});
	// TODO: Sort by default last updated,
	// TODO: enable route to sort by param
	res.json(celebrities);
}
