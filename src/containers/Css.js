import React from 'react'
import content from '../content/css.md'
import Page from '../components/Page'
import ResponsiveVideo from '../components/ResponsiveVideo'

export default () => (
  <Page
    title="You Might Not Need Css"
    content={content}>
    <ResponsiveVideo
      title="First class styles"
      embedUrl="https://www.youtube.com/embed/KmtgJ1d4zuY" />
  </Page>
)
