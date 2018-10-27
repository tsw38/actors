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
      // console.warn(movieName, movies[movieName].role, role)
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
}
