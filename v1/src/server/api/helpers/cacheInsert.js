import mysql from 'mysql2/promise';
import btoa from 'btoa';

export default async ({results, celebrity}) => {
  const connection = await mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    database:process.env.DB_NAME
  });

  const celebrityInsert = await connection.query(`INSERT IGNORE INTO celebrity (name) VALUES ('${celebrity.toLowerCase().trim().replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '')}');`);
  const celebrityKey    = celebrityInsert[0].insertId;

  const insertMoviesQuery = "INSERT IGNORE INTO movie (name, rating, year, boxOffice) VALUES ?";
  const values = results.data
    .filter(movie => !isNaN(movie.rating))
    .map(({title, rating, year, boxOffice}) => [
      btoa(title),
      Number(rating),
      year,
      boxOffice ? boxOffice : '0'
  ]);
  const inserted1 = await connection.query(insertMoviesQuery, [values]);

  const insertCelebToMovieQuery = "INSERT IGNORE INTO celebToMovie (celebId, movieId) VALUES ?";
  const insertCelebToMovieQueryValues = values
    .map(movie => [
      celebrityKey,
      movie[0]
  ]);
  const inserted2 = await connection.query(insertCelebToMovieQuery, [insertCelebToMovieQueryValues]);

  let selectedRoles = await connection.query('SELECT * FROM roles');
  selectedRoles     = selectedRoles[0];

  const insertCelebAndRoles = 'INSERT IGNORE INTO rolesToCelebToMovie (celebId, roleId, movieId) VALUES ?';
  const insertrolesToCelebToMovieQueryValues = results.data
    .map(movie => {
      let roleAsIdArr = movie.role.map(elem => selectedRoles.find(role => role.name === elem).id);
      return roleAsIdArr.map(role => [
        celebrityKey,
        role,
        btoa(movie.title)
      ])
  }).reduce((newArr, result) => { //some reason it is an array of arrays in array, fix that
    if (Array.isArray(result) && Array.isArray(result[0])){
      result.forEach(temp => {newArr.push(temp);});
    } else { newArr.push(result); }
    return newArr;
  }, []);

  const inserted3 = await connection.query(insertCelebAndRoles, [insertrolesToCelebToMovieQueryValues]);



  return inserted1;

}
