import React from 'react'
import Page from '../../components/Page'
import { getStaticProps as getStatProp } from '../../helpers/static-props'

export async function getStaticProps({ params: { frw } }) {
  return getStatProp(`${frw}/missing`)
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
