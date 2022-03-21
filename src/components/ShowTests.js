import React, { memo } from 'react'
import styled from 'styled-components'

const ShowTests = styled.div`
  text-align: right;
`

export default memo(({ onChange, checked }) => (
  <ShowTests>
    <label htmlFor="showTests">
      Show tests?{' '}
      <input
        id="showTests"
        type="checkbox"
        onChange={onChange}
        checked={checked}
      />
    </label>
  </ShowTests>
))
