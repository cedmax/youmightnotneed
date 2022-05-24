import React from 'react'
import Page from '../components/Page'

export async function getStaticProps() {
  const {
    config: { index, footer },
  } = require('../server/config')

  return { props: { ...index, footer } }
}

export default props => (
  <Page
    {...props}
    content="<h1>404</h1><h2>This page could not be found.</h2>"
  />
)
