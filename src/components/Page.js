import React, { Fragment } from 'react'
import Head from 'next/head'
import Content from './ContentBlock'
import Footer from './Footer'

export default ({ content, title, children, footer }) => (
  <Fragment>
    <Head>
      <title>{title}</title>
    </Head>
    <Content dangerouslySetInnerHTML={{ __html: content }} />
    {children}
    <Footer footer={footer} />
  </Fragment>
)
