import '@exampledev/new.css/new.css'
import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    ${({ theme }) => theme.variables};
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

  .button {
    padding-top: 0;
    padding-bottom: 0;
  }

  strong {
    font-weight: 700;
  }
`

export default styled.div`
  nav {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    @media (max-width: 640px) {
      align-items: flex-start;
      flex-direction: column;
    }

    box-sizing: border-box;
    width: 100%;
    padding: 1rem;
    position: relative;

    @media screen and (min-width: 30em) {
      padding: 2rem;
      padding-right: 3.5em;
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
    button {
      color: var(--nc-lk-2);
      font-size: 12px;

      &,
      :hover,
      :active,
      :focus {
        opacity: 0.7;
        margin-left: auto;
        background-repeat: no-repeat;
        background-position: center;
        background-size: 25px;
        overflow: hidden;
        background-color: transparent;
      }
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
