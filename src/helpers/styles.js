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

  .ReactModal__Body--open {
    overflow: hidden;
  }

  .hljs a {
    text-decoration: underline;
    text-decoration-style: dotted;
  }
`

export default styled.div`
  nav {
    width: 100%;
    padding: 1rem;

    @media screen and (min-width: 30em) {
      padding: 2rem;
    }

    a:first-child {
      color: #000;
      font-weight: bold;
    }

    a:first-child[aria-current]::after {
      content: ' *';
    }

    a {
      display: inline-block;
      text-decoration: none;
      transition: color 0.15s ease-in;
      color: #777;
      opacity: 1;
      transition: opacity 0.15s ease-in;
      margin-right: 1rem;
    }

    a[aria-current] {
      font-weight: bold;
      color: black;
    }

    a:last-child {
      margin-right: 0;
    }

    a:active {
      opacity: 0.8;
      transition: opacity 0.15s ease-out;
    }

    a:hover {
      opacity: 0.5;
      transition: opacity 0.15s ease-in;
      text-decoration: underline;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin-bottom: 0.5em;
  }

  footer {
    text-align: right;
  }
`
