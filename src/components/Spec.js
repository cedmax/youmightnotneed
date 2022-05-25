import React from 'react'
import styled from 'styled-components'
import Hightlight from 'react-highlight/lib/optimized'
import Heading from './Heading'

const Tests = styled.div`
  padding-bottom: 4em;

  code {
    display: block;
    padding: 15px;
    background: var(--custom-bk-code);
    border: 0;
    border-left: 3px solid var(--nc-lk-1);
    border-radius: 0;
  }
`

export default ({ code }) => (
  <Tests>
    <Heading hierarchy="4">Test</Heading>
    <Hightlight className="javascript">{code}</Hightlight>
  </Tests>
)
