import React from 'react'
import Page from '../components/Page'
import dynamic from 'next/dynamic'
import { getStaticProps as getStatProp } from '../helpers/static-props'

const LibPage = dynamic(import('../components/LibPage'))

export async function getStaticProps({ params: { frw } }) {
  return getStatProp(frw)
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
