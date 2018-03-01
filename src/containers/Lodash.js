
import React, { Fragment } from 'react'
import { Head } from 'react-static'
import LibPage from '../components/LibPage'
import mapImports from '../helpers/map-imports'
import content from '../content/lodash.md'
import Content from '../components/ContentBlock'

const data = mapImports(require.context('../content/lodash', true, /\.js|.md$/))

export default () => (
  <Fragment>
    <Head><title>You Might Not Need Lodash</title></Head>
    <Content dangerouslySetInnerHTML={{ __html: content }} />
    <LibPage data={data} />
  </Fragment>
)
