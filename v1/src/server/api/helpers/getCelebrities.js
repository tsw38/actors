import mysql from 'mysql2/promise';
import atob from 'atob';

export default async (celebrity) => {
  const connection = await mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    database:process.env.DB_NAME
  });

  let data = await connection.query(`
    SELECT
      c.name as "name", lastUpdated, m.name as "movie", rating
    FROM
      celebrity as c
    JOIN
      celebToMovie as ctm ON c.id = ctm.celebId
    JOIN
      movie as m ON ctm.movieId = m.name`);

  let movies = {};

  // const result = data[0].reduce((celebrities, celebrity) => {
  //   celebrities[celebrity.name] = {
  //     movieCount: ++(celebrities[celebrity.name].movieCount || 0),
  //     scores: celebrities[celebrity.name].scores +
  //   }
  // }, {});

  return {
    status: data[0].length ? 200 : 404,
    data: data[0] || null
  }
}
