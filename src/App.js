import React from 'react'
import { hot } from 'react-hot-loader'
import { Router } from 'react-static'
import Routes from 'react-static-routes'
import AppStyles from './helpers/styles'
import Footer from './components/Footer'
import Nav from './components/Nav'

const App = () => (
  <Router>
    <AppStyles>
      <Nav />
      <Routes />
      <Footer />
    </AppStyles>
  </Router>
)

export default hot(module)(App)
