import 'highlight.js/styles/xcode.css'
import 'milligram/dist/milligram.css'
import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,
      'Lucida Grande', sans-serif;
    font-weight: 300;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }

  .hljs a {
    text-decoration: underline;
    text-decoration-style: dotted;
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
