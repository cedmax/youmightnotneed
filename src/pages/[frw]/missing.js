import React from 'react'
import Page from '../../components/Page'

export async function getStaticProps({ params: { frw } }) {
  const { getStaticProps } = require('../../helpers/static-props')

  return getStaticProps(`${frw}/missing`)
}

export async function getStaticPaths() {
  const frws = ['lodash', 'date-fns']

  const paths = frws.map(frw => {
    return { params: { frw } }
  })

  return {
    paths,
    fallback: false,
  }
}

export default props => <Page {...props} />
