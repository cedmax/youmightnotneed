import React from 'react'
import mapImports from '../helpers/map-imports'
import LibPage from '../components/LibPage'
import content from '../content/date-fns.md'
import Page from '../components/Page'

const data = mapImports(
  require.context('../content/date-fns', true, /\.js|.md$/)
)

export default () => (
  <Page title="You Might Not Need Date-fns" content={content}>
    <LibPage data={data} />
  </Page>
)
