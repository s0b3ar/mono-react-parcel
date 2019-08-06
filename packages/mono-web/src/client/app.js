import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { CookiesProvider } from 'react-cookie'
import { Router } from 'react-router-dom'

import Home from './Home'
const store = {}

const App = () => (
  <Provider store={store}>
    <CookiesProvider>
      <Router>
        <Home />
      </Router>
    </CookiesProvider>
  </Provider>
)

const mountPoint = document.getElementById('mount-point')
ReactDOM.render(<App />, mountPoint, () => console.log('DONE'))
