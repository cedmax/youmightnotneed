import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
  width: 100%;
  padding: 0.5em;
  font-size: 120%;
`

export default props => <Input placeholder="Search..." {...props} />
