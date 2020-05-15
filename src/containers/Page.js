import React from 'react'
import { withRouteData } from 'react-static'
import Page from '../components/Page'

export default withRouteData(({ content, title }) => (
  <Page title={title} content={content} />
))
