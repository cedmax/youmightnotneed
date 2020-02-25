import React from 'react'
import footerContent from '../content/footer.md'
import Content from './ContentBlock'

export default () => (
  <footer>
    <Content dangerouslySetInnerHTML={{ __html: footerContent }} />
  </footer>
)
