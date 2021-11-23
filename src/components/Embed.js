import React from 'react'
import codesandboxUrls from '../code-sandbox.json'
import styled from 'styled-components'

const Embed = styled.iframe`
  width: 100%;
  height: 100%;
  border: 0;
  position: relative;
`

export default ({ id }) => {
  const url = codesandboxUrls[id]
  return (
    <Embed
      src={
        url.replace('/s/', '/embed/').replace('&file=', '&module=') +
        '&autoresize=1'
      }
    />
  )
}
