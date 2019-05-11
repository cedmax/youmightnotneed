import React from 'react'
import mapImports from '../helpers/map-imports'
import LibPage from '../components/LibPage'
import content from '../content/lodash.md'
import Page from '../components/Page'

const data = mapImports(require.context('../content/lodash', true, /\.js|.md$/))

export default () => (
  <Page title="You Might Not Need Lodash" content={content}>
    <LibPage data={data} />
  </Page>
)
