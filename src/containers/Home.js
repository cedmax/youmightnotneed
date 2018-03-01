
import React, { Fragment } from 'react'
import { Head } from 'react-static'
import content from '../content/readme.md'
import Content from '../components/ContentBlock'

export default () => (
  <Fragment>
    <Head><title>You Might Not Need *</title></Head>
    <Content dangerouslySetInnerHTML={{ __html: content }} />
  </Fragment>
)
