import React from 'react'
import Page from '../components/Page'
import ResponsiveVideo from '../components/ResponsiveVideo'

export async function getStaticProps() {
  const {
    config: { css, footer },
  } = require('../server/config')

  return { props: { ...css, footer } }
}

export default props => (
  <Page {...props}>
    <ResponsiveVideo
      title="First class styles"
      embedUrl="https://www.youtube.com/embed/KmtgJ1d4zuY"
    />
  </Page>
)
