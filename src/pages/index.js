import React from 'react'
import Page from '../components/Page'
import { getStaticProps as getStatProp } from '../helpers/static-props'

export async function getStaticProps() {
  return getStatProp('index')
}

export default props => <Page {...props} />
