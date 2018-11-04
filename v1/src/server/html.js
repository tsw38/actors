export default ({ markup, helmet, store, stylesheets }) => {
  let html = `<!DOCTYPE html>
  <!-- VERSION NUMBER: ${process.env.VERSION_NUMBER} -->
  <html ${helmet.htmlAttributes ? helmet.htmlAttributes.toString() : ''}>
    <head>
      <meta charset="utf-8">
      ${helmet.title ? helmet.title.toString() : ''}
      ${helmet.meta ? helmet.meta.toString() : ''}
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:500" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Permanent+Marker:400" />
      ${helmet.link ? helmet.link.toString() : ''}
      <script>window.__INITIAL_STATE__ = ${JSON.stringify(store.getState() || {})};</script>
      ${stylesheets}
    </head>
    <body ${helmet.bodyAttributes ? helmet.bodyAttributes.toString() : ''}>
      <div id="starcharts">${markup}</div>
      <script src="./js/bundle.js"></script>
    </body>
  </html>`;
  return html.replace(/\s{2,}/g,'');
}
