setup:

`yarn` or `npm install`
make sure to have rollup installed globally
`npm install -g rollup`

To compile the files and run the server
`rollup src/server/server.js --file server.bundle.js --format cjs && node server.bundle.js`
Server is on 4558 or what you changed it to in .env
