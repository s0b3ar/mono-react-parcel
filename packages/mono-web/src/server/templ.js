import Helmet from 'react-helmet'

export default ({ markup, preloadedState }) => {
  const helmet = Helmet.renderStatic();
  return `
  <!doctype html>
  <html ${helmet.htmlAttributes.toString()} >
    <head>
      <meta charset="utf-8" />
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      ${helmet.link.toString()}
      <link rel="stylesheet" href="dist/app.css"></head>
    </head>
    <body ${helmet.bodyAttributes.toString()} >
    
      <div id="app">${markup}</div>
    
      <script>
        window.__INIT_DATA_FROM_SERVER_RENDER__ = ${JSON.stringify(preloadedState)};
      </script>
      <script src="/dist/index.js"></script>
    </body>
  </html> 
  `
}
