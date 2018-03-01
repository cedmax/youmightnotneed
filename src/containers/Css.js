import React from 'react'
import { Head } from 'react-static'
import styled from 'styled-components'
import content from '../content/css.md'
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

export default () => (
  <Content>
    <Head><title>You Might Not Need Css</title></Head>
    <div dangerouslySetInnerHTML={{ __html: content }} />
    <VideoContainer>
      <iframe
        title="First class styles"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/KmtgJ1d4zuY"
        frameBorder="0"
        allowFullScreen=""
      />
    </VideoContainer>
  </Content>
)
