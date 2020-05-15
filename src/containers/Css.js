import React from 'react'
import { withRouteData } from 'react-static'
import Page from '../components/Page'
import ResponsiveVideo from '../components/ResponsiveVideo'

export default withRouteData(({ title, content }) => (
  <Page title={title} content={content}>
    <ResponsiveVideo
      title="First class styles"
      embedUrl="https://www.youtube.com/embed/KmtgJ1d4zuY"
    />
  </Page>
))
