import React from 'react'
import Page from '../components/Page'
import ResponsiveVideo from '../components/ResponsiveVideo'
import { getStaticProps as getStatProp } from '../helpers/static-props'

export async function getStaticProps() {
  return getStatProp('css')
}

export default props => (
  <Page {...props}>
    <ResponsiveVideo
      title="First class styles"
      embedUrl="https://www.youtube.com/embed/KmtgJ1d4zuY"
    />
  </Page>
)
