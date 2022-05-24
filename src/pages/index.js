import React from 'react'
import Page from '../components/Page'

export async function getStaticProps() {
  const { getConfigProps } = require('../helpers/config')

  return getConfigProps('index')
}

export default props => <Page {...props} />
