import React from 'react'
import Page from '../components/Page'

export async function getStaticProps() {
  const { getStaticProps } = require('../helpers/static-props')

  return getStaticProps('index')
}

export default props => <Page {...props} />
