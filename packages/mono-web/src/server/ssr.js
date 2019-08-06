import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { Provider } from 'react-redux'
import { CookiesProvider } from 'react-cookie'
import { StaticRouter as Router } from 'react-router-dom'

import Home from '../client/Home'
// import configureStore from '~/store/configureStore'
import tmpl from './templ'

export default async (req, res, next) => {
  const context = {}

  // const store = configureStore()
  const store = {}
  // if (component.fetchData) {
  //   await component.fetchData(store.dispatch, params, req.query)
  // }
  // const preloadedState = store.getState()
  const preloadedState = {}

  const markup = ReactDOMServer.renderToString(
    <Provider store={store}>
      <CookiesProvider cookies={req.universalCookies}>
        <Router location={req.url} context={context}>
          <Home />
        </Router>
      </CookiesProvider>
    </Provider>
  )

  if (context.url) {
    return res.redirect(context.url)
  }

  const html = tmpl({ markup, preloadedState })

  res.send(html)
}
