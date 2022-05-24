import React from 'react'
import Content from './ContentBlock'

export default ({ footer }) => (
  <footer>
    <Content dangerouslySetInnerHTML={{ __html: footer }} />
  </footer>
)
