import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import path from 'path';
import morgan from 'morgan';
import chalk from 'chalk';
import dotenv from 'dotenv';
import compression from 'compression';
import favicon from 'serve-favicon';

import ServerRenderer from './renderer';
import {Variables} from '../shared/utils';

import {
  imagesEndpoint,
  searchEndpoint,
  celebritiesEndpoint
} from './api';

dotenv.config();

var app = express();

app
.use(bodyParser.json())
.use(bodyParser.urlencoded({extended:true}))
.use(cookieParser())
.use(compression())
.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'))
.use((req,res,next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PATCH');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
})
// .use(favicon(path.join('','imgs/favicon.ico')))
.use('*/css', express.static(`./build/${process.env.VERSION_NUMBER}/client`))
.use('*/js', express.static(`./build/${process.env.VERSION_NUMBER}/client`))
.get('/images(/:image)/?', imagesEndpoint)
.get('/search', searchEndpoint)
.get('/celebrities', celebritiesEndpoint)
.use(ServerRenderer);

app.listen(process.env.HTTP_PORT,'0.0.0.0', () => {
  // console.log(Variables);

  console.log(chalk.magenta(`VERSION NUMBER: ${process.env.VERSION_NUMBER}`))
  console.log(chalk.green(`${Variables.origin} is live PID:${process.pid}`));
});
