import React from 'react'
import mapImports from '../helpers/map-imports'
import LibPage from '../components/LibPage'
import content from '../content/moment.md'
import Page from '../components/Page'

const data = mapImports(require.context('../content/moment', true, /\.js|.md$/))

export default () => (
  <Page title="You Might Not Need Moment.js" content={content}>
    <LibPage data={data} />
  </Page>
)
