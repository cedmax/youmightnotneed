
import React, { Fragment } from 'react'
import { Head } from 'react-static'
import content from '../content/lodash-missing.md'
import Content from '../components/ContentBlock'

export default () => (
  <Fragment>
    <Head><title>You Might Not Need Lodash</title></Head>
    <Content dangerouslySetInnerHTML={{ __html: content }} />
  </Fragment>
)
