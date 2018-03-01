import React from 'react'
import footerContent from '../content/footer.md'
import Content from '../components/ContentBlock'

export default () => (
  <Content>
    <footer dangerouslySetInnerHTML={{ __html: footerContent }} />
  </Content>
)
