import React from 'react'
import Page from '../components/Page'
import dynamic from 'next/dynamic'

const LibPage = dynamic(import('../components/LibPage'))

export async function getStaticProps({ params: { frw } }) {
  const { getStaticProps } = require('../helpers/static-props')

  return getStaticProps(frw)
}

export async function getStaticPaths() {
  const frws = ['lodash', 'date-fns', 'momentjs']

  const paths = frws.map(frw => {
    return { params: { frw } }
  })

  return {
    paths,
    fallback: false,
  }
}

export default ({ data, configKey, ...props }) => (
  <Page {...props}>{data && <LibPage data={data} frw={configKey} />}</Page>
)
