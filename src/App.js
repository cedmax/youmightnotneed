import React, { Suspense } from 'react'
import { Root, Routes } from 'react-static'
// eslint-disable-next-line import/no-unresolved
import { Router } from '@reach/router'
import AppStyles, { GlobalStyle } from './helpers/styles'
import Footer from './components/Footer'
import Nav from './components/Nav'

const App = () => (
  <Root>
    <GlobalStyle />
    <AppStyles>
      <Nav />
      <Suspense fallback={<div />}>
        <Router>
          <Routes path="*" />
        </Router>
      </Suspense>
      <Footer />
    </AppStyles>
  </Root>
)

export default App
