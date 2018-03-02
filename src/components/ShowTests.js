import React from 'react'
import styled from 'styled-components'

const ShowTests = styled.div`
  text-align:right
`

export default ({ onChange, checked }) => (
  <ShowTests>
    <label htmlFor="showTests">
      Show tests?
      <input
        id="showTests"
        type="checkbox"
        onChange={onChange}
        checked={checked} />
    </label>
  </ShowTests>
)
