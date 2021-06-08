import React, { Fragment } from 'react'
import { Head } from 'react-static'
import Content from './ContentBlock'
import Footer from './Footer'

export default ({ content, title, children }) => (
  <Fragment>
    <Head>
      <title>{title}</title>
    </Head>
    <Content dangerouslySetInnerHTML={{ __html: content }} />
    {children}
    <Footer />
  </Fragment>
)
