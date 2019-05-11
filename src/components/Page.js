import React, { Fragment } from 'react'
import { Head } from 'react-static'
import Content from './ContentBlock'

export default ({ content, title, children }) => (
  <Fragment>
    <Head>
      <title>{title}</title>
    </Head>
    <Content dangerouslySetInnerHTML={{ __html: content }} />
    {children}
  </Fragment>
)
