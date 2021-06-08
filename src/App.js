import React, { Suspense } from 'react'
import { Root, Routes } from 'react-static'
import { Router } from '@reach/router'
import AppStyles, { GlobalStyle } from './helpers/styles'
import Nav from './components/Nav'

const App = () => (
  <Root>
    <GlobalStyle />
    <AppStyles>
      <Nav />
      <Suspense fallback={null}>
        <Router>
          <Routes path="*" />
        </Router>
      </Suspense>
    </AppStyles>
  </Root>
)

export default App
