import React from 'react'
import Page from '../components/Page'
import LibPage from '../components/LibPage'

export async function getStaticProps({ params: { frw } }) {
  const { config } = require('../server/config')
  return { props: { ...config[frw], footer: config.footer, frw } }
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

export default ({ data, frw, ...props }) => (
  <Page {...props}>{data && <LibPage data={data} frw={frw} />}</Page>
)
