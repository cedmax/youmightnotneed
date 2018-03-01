import React from 'react'
import styled from 'styled-components'

const component = hierarchy => styled[`h${hierarchy}`]`
  text-transform: capitalize;
  margin: auto;
  text-align: ${parseInt(hierarchy, 10) < 3 ? 'center':'left'}
`

export default ({ hierarchy, children }) => {
  const Component = component(hierarchy)
  return (
    <Component>
      {children}
    </Component>
  )
}
