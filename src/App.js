import React from 'react'
import { Router, Link } from 'react-static'
import styled, { injectGlobal } from 'styled-components'
import { hot } from 'react-hot-loader'
import 'highlight.js/styles/github-gist.css'
import 'milligram/dist/milligram.css'
import Routes from 'react-static-routes'

injectGlobal`
  body {
    font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,
      'Lucida Grande', sans-serif;
    font-weight: 300;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }
`

const AppStyles = styled.div`
  nav {
    width: 100%;
    background: #108db8;

    a {
      color: white;
      padding: 1rem;
      display: inline-block;
    }

    a:hover {
      text-decoration: underline
    }
  }

  h1 { margin-bottom: .5em; }
  h2 { margin-bottom: .5em; }
  h3 { margin-bottom: .5em; }
  h4 { margin-bottom: .5em; }
  h5 { margin-bottom: .5em; }

  footer {
    text-align: center;
    padding-bottom: 5em
  }
`

const App = () => (
  <Router>
    <AppStyles>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/lodash">Lodash</Link>
        <Link to="/css">Css</Link>
      </nav>
      <Routes />
      <footer>
        made by <a href="https://cedmax.com/">cedmax</a>
      </footer>
    </AppStyles>
  </Router>
)

export default hot(module)(App)
