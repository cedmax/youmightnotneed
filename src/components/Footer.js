import React from 'react'
import footerContent from '../content/footer.md'
import Content from './ContentBlock'

export default () => (
  <Content>
    <footer dangerouslySetInnerHTML={{ __html: footerContent }} />
  </Content>
)
