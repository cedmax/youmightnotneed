import React from 'react'
import AppStyles, { GlobalStyle } from '../helpers/styles'
import Nav from '../components/Nav'

const App = ({ Component, pageProps }) => (
  <>
    <GlobalStyle />
    <AppStyles>
      <Nav />
      <Component {...pageProps} />
    </AppStyles>
    <div id="modal-root"></div>
  </>
)

export default App
