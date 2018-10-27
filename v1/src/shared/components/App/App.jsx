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
  Homepage
} from 'views/index';


import {
  AppProvider
} from 'context/Context.jsx';

export default class App extends React.Component {
  componentWillMount(){
  }

  render(){
    return(
      <React.Fragment>
        <Helmet
          htmlAttributes={{lang:"en"}}
          titleTemplate="Tyler Scott | %s"
          titleAttributes={{itemprop: "name", lang: "en"}}
          link={[
            {rel:"canonical", href: `https://tylerscott.gallery/`}
          ]}
          meta={[
            {name: "description", content: "Photographer &amp; Small Scale Explorer. As a Chicago transplant via New Jersey I\'ve traveled a fair amount and have found the most joy out of capturing you in your element. Let me prove it."},
            {name: "keywords", content: "photography, photographer, headshot photography, wedding photography, portrait photography, Tyler Scott Williams, Tyler Scott, wedding, headshots, headshot, portraits, wedding day, portrait, dslr, new york, New York, Manhattan, New York City, New York, New Jersey, Jersey City, JC, NJ, commercial, blog, contact, Chicago, Chi, Chitown, south west florida, Florida, Senior Portraits, Maternity Portraits, Commercial, Professional Photography, Illinois, Chicago IL, 60657"},
            {property: "og:site_name", content: 'Tyler Scott | Chicago Wedding & Portrait Photographer'},
            {property: "og:type", content: 'website'},
            {property: "og:url", content: 'https://tylerscott.gallery/'},
            {name: "viewport", content: "width=device-width, initial-scale=1,minimum-scale=1"}
          ]} />
          <Switch>
            <AppProvider {...this.props}>
              <Route exact path="/" component={ Homepage } />
            </AppProvider>
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
    overflow:hidden;
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
    height:calc(100vh);
    width:calc(100vw);
    font-family: 'Montserrat',sans-serif;
    background-color:${Variables.backgroundState};

    *,*:focus{
      outline:none;
      outline-style:none;
      outline-color:transparent;
    }
  }
`;
