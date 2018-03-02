import React from 'react'
import styled from 'styled-components'
import Content from '../components/ContentBlock'

const Input = styled.input`
  width: 100%;
  padding: .5em;
  font-size: 120%;
`

export default props => (
  <Content><Input placeholder="Search..." {...props} /></Content>
)
