import { Variables } from 'utils';

export default async function(celeb) {
  const {data} = await Variables.axios(`${Variables.origin}/search?celebrity=${celeb}`);
  return {
    name: celeb,
    movies: data.results.data
  }
}
