import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { createGlobalStyle } from 'styled-components';
import atob from 'atob';

import {
  Console,
  Variables,
  ObjectUtil
} from 'utils';

import {
  HomepageView,
  CelebrityView
} from 'views/index';

export default class App extends React.Component {
  componentWillMount(){
  }

  render(){
    return(
      <React.Fragment>
        <Helmet
          htmlAttributes={{lang:"en"}}
          titleTemplate="Starcharts | %s"
          titleAttributes={{itemprop: "name", lang: "en"}}
          link={[
            {rel:"canonical", href: `http://tomato.tylerscottwilliams.com/`}
          ]}
          meta={[
            {name: "description", content: ""},
            {name: "keywords", content: ""},
            {property: "og:site_name", content: ''},
            {property: "og:type", content: 'website'},
            {property: "og:url", content: 'http://tomato.tylerscottwilliams.com/'},
            {name: "viewport", content: "width=device-width, initial-scale=1,minimum-scale=1"}
          ]} />
          <Switch>
            <Route exact path="/" component={ HomepageView } />
            <Route exact path="/celebrity/:celebrity" component={ CelebrityView } />
          </Switch>
          <GlobalStyle />
      </React.Fragment>
    )
  }
}

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
  	margin: 0;
  	padding: 0;
  	border: 0;
  	font-size: 100%;
  	font: inherit;
  	vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
  	display: block;
  }
  body {
  	line-height: 1;
  }
  ol, ul {
  	list-style: none;
  }
  blockquote, q {
  	quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
  	content: '';
  	content: none;
  }
  table {
  	border-collapse: collapse;
  	border-spacing: 0;
  }


  body {
    width:calc(100vw);
    font-family: 'Montserrat',sans-serif;
    background-color:${Variables.backgroundState};

    *,*:focus{
      outline:none;
      outline-style:none;
      outline-color:transparent;
    }
  }

  .bold {
    font-weight: bold;
  }
`;
