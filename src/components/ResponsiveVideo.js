import React from 'react'
import styled from 'styled-components'
import Content from '../components/ContentBlock'

const VideoContainer = styled.div`
  margin: auto;
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 35px;
  height: 0;
  overflow: hidden;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

export default ({ title, embedUrl }) => (
  <Content>
    <VideoContainer>
      <iframe
        title={title}
        width="560"
        height="315"
        src={embedUrl}
        frameBorder="0"
        allowFullScreen=""
      />
    </VideoContainer>
  </Content>
)