import React from 'react'
import Page from '../components/Page'
import { getStaticProps as getStatProp } from '../helpers/static-props'

export async function getStaticProps() {
  return getStatProp('index')
}

export default props => (
  <Page
    {...props}
    content="<h1>404</h1><h2>This page could not be found.</h2>"
  />
)
