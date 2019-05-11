import 'highlight.js/styles/github-gist.css'
import 'milligram/dist/milligram.css'
import styled, { injectGlobal } from 'styled-components'

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

export default styled.div`
  nav {
    width: 100%;
    background: #108db8;

    a {
      color: white;
      padding: 1rem;
      display: inline-block;
    }

    a:hover {
      text-decoration: underline;
    }
  }

  h1 {
    margin-bottom: 0.5em;
  }
  h2 {
    margin-bottom: 0.5em;
  }
  h3 {
    margin-bottom: 0.5em;
  }
  h4 {
    margin-bottom: 0.5em;
  }
  h5 {
    margin-bottom: 0.5em;
  }

  footer {
    text-align: right;
  }
`
