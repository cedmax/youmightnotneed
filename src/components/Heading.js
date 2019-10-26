import React from 'react'
import styled from 'styled-components'

const Heading = styled.h1`
  text-transform: capitalize;
  margin: auto;
  text-align: ${({ hierarchy }) => (parseInt(hierarchy, 10) < 3 ? 'center' : 'left')};
`

export default ({ hierarchy, children }) => (
  <Heading as={`h${hierarchy}`} hierarchy={hierarchy}>
    {children}
  </Heading>
)
