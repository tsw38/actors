import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import morgan from 'morgan';
import chalk from 'chalk';
import dotenv from 'dotenv';
// import favicon from 'serve-favicon';
// import ServerRenderer from './renderer';
// import {Variables} from '../shared/utils';
// import jwt from 'jsonwebtoken';

import rottenSearch from './scrapper';
import html from '../client/index';

dotenv.config();

express()
.use(bodyParser.json())
.use(bodyParser.urlencoded({extended:true}))
.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'))
.use((req,res,next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,POST,PATCH');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
})
.get('/', (req,res) => html(req,res)())
.get('/search', async (req,res) => {
	const results = await rottenSearch(req.query.celebrity);
	return html(req,res)({
		fromServer: results,
		celebrity: req.query.celebrity
	});
})
.listen(process.env.HTTP_PORT,'0.0.0.0', () => {
	console.log(chalk.magenta(`VERSION NUMBER: ${process.env.VERSION_NUMBER}`))
	console.log(chalk.green(`${process.env.origin} is live PID:${process.pid}`));
});
