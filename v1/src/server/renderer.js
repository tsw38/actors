'use strict';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { matchRoutes } from 'react-router-config';
import { Helmet } from 'react-helmet';
import cheerio from 'cheerio';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
import chalk from 'chalk';

import { App } from '../shared/components';

import routes from './routes/routes';
import HTMLTemplate from './html.js';

const asyncMatchRoute = async (routes,location, cookies) => {
  let generatedHTML = '';

  const branch = await matchRoutes(routes,location);
// console.warn('THIS IS THE SERVER RENDERER',branch);

  let matchedRoute = branch
    .filter(Boolean)
    .filter(component => !!component.route && !!component.route.path)
    .map(({route}) => {
      console.log('\n-----------------------------------')
      console.log(route);
      console.log('-----------------------------------\n');
      return {
        preRender: route.preRender
      }
    })
    .slice(-1);

  // console.log(chalk.green('MATCHED!!!!!'), matchedRoute);

  if(matchedRoute){
    try{
      generatedHTML = await renderHTML({routes, location, matchedRoute, cookies});
    } catch (err) {
      generatedHTML = "404";
      console.error(chalk.red(`\n\n<<<<<< ERROR GENERATING HTML: ${location} >>>>>>>>`))
      console.error(err);
      console.error(chalk.red(`<<<<<< ERROR GENERATING HTML: ${location} >>>>>>>>\n\n`))
    }
  }
  return generatedHTML;
}

async function getPrerequisites() {

}

async function renderHTML({routes, location, matchedRoute, cookies}){
  const subpage = location.split('/').pop();
  console.log('+++++++++++++++++++++++++++++++++++++++++++')
  console.log('this is the matchedRoute', matchedRoute);
  console.log('this is the location', location);
  console.log('this is the subpage', subpage);

  const prerequisites = await matchedRoute[0].preRender(subpage);
  // console.log('prerequisites', prerequisites);

  const {
    key,
    ...remainingOptions
  } = prerequisites;

  const state = {
    [key]: {
      key,
      ...remainingOptions,
      location
    }
  };

  // console.warn(state);
  let sheet, markup;

  try {
    sheet = new ServerStyleSheet();
    markup = ReactDOMServer.renderToString(
      <StyleSheetManager sheet={sheet.instance}>
        <StaticRouter location={location} context={{}}>
          <App
            state={state}
            cookies={cookies}
          />
        </StaticRouter>
      </StyleSheetManager>
    );
  } catch (err) {
    console.warn('there might not be any markup', err);
  } finally {
    console.log('is there any markup');
    console.log(markup);
    console.log(!markup);
    console.log('+++++++++++++++++++++++++++++++++++++++++++\n\n');

    return HTMLTemplate({
      markup: markup || '',
      helmet: Helmet.renderStatic(),
      state,
      stylesheets: sheet.getStyleTags() || ''
    });
  }
}

export default async (req,res,next) => {
  const { body, path, cookies } = req;
  let newHTML = '';
  try{
    newHTML = await asyncMatchRoute(routes,path,cookies);
  } catch (err) {
    console.error(err);
    newHTML = 'ERROR';
  } finally {
    if(/404/.test(newHTML)) res.redirect(301, "/");
    res.send(newHTML);
  }
}
