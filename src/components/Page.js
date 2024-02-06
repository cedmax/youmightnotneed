import React, { Fragment } from 'react'
import Head from 'next/head'
import Content from './ContentBlock'
import Footer from './Footer'

export default ({ content, title, children, footer, siteRoot }) => (
  <Fragment>
    <Head>
      <title>{title}</title>
      <meta name="msvalidate.01" content="0B159474AD5BF3967C81DAEA4C4F9F2B" />
      <meta
        name="description"
        content='A collection of "You might not need ${something}" resources'
      />
      <meta property="og:image" content={`${siteRoot}/share.jpg`} />
    </Head>
    <Content dangerouslySetInnerHTML={{ __html: content }} />
    {children}
    <Footer footer={footer} />
  </Fragment>
)
