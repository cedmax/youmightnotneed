import React from 'react'
import { withRouteData } from 'react-static'
import LibPage from '../components/LibPage'
import Page from '../components/Page'

export default withRouteData(({ data, content, title }) => (
  <Page title={title} content={content}>
    <LibPage data={data} />
  </Page>
))
