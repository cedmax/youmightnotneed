import 'highlight.js/styles/xcode.css'
import '@exampledev/new.css/new.css'
import styled, { createGlobalStyle } from 'styled-components'

/* @media (prefers-color-scheme: dark) {
  :root {
    --nc-tx-1: #ffffff;
    --nc-tx-2: #eeeeee;
    --nc-bg-1: #000000;
    --nc-bg-2: #111111;
    --nc-bg-3: #222222;
    --nc-lk-1: #00BFFF;
    --nc-lk-2: #0D98BA;
    --nc-lk-tx: #FFFFFF;
    --nc-ac-1: #7928CA;
    --nc-ac-tx: #FFFFFF;
    --custom-bk-code: #ccc;
    --custom-tx-code: #888
  }
} */

export const GlobalStyle = createGlobalStyle`
  :root {
    --nc-tx-1: rgb(40, 40, 40);
    --nc-tx-2: rgb(66, 78, 88);
    --nc-lk-1: rgb(155, 77, 202);
    --nc-lk-2: rgb(96, 108, 118);
    --nc-lk-tx: #FFFFFF;
    --nc-bg-1: #FFFFFF;
    --nc-bg-2: #F8F8F8;
    --nc-bg-3: #FFFFFF;
    --nc-ac-1: rgb(155, 77, 202);
    --nc-ac-tx: #fff;
    --custom-bk-code: #f0f0f0
  }

  body {
    font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,
      'Lucida Grande', sans-serif;
    font-weight: 300;
    font-size: 16px;
    max-width: 100%;
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

  pre {
    padding: 0;
    border-radius: 0 4px 4px 0;
  }

  .button, .button:hover,.button:focus, .button:active {
    background: none;
    color: var(--nc-lk-1);
  }
  .button:hover, .button:focus, .button:active {
    background: none;
    color: var(--nc-lk-2);
  }

  strong {
    font-weight: 700;
  }
`

export default styled.div`
  nav {
    box-sizing: border-box;
    width: 100%;
    padding: 1rem;

    @media screen and (min-width: 30em) {
      padding: 2rem;
    }

    a:first-child {
      color: var(--nc-tx-1);
      font-weight: bold;
    }

    a:first-child[aria-current]::after {
      content: ' *';
    }

    a {
      display: inline-block;
      text-decoration: none;
      transition: color 0.15s ease-in;
      color: var(--nc-lk-2);
      opacity: 1;
      transition: opacity 0.15s ease-in;
      margin-right: 1rem;
    }

    a[aria-current] {
      font-weight: bold;
      color: var(--nc-tx-1);
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
    border-bottom: 0;
  }

  footer {
    text-align: right;
  }
`
