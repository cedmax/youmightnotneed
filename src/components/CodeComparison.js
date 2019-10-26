import React, { Fragment, memo } from 'react'
import styled from 'styled-components'
import Linkify from 'react-simple-linkify'
import Hightlight from 'react-highlight.js'
import Heading from './Heading'
import Spec from './Spec'

const LineBlock = styled.div`
  padding-bottom: 2rem;
  margin: auto;

  code {
    padding: 15px;
    background: #f0f0f0;
  }

  @media (min-width: 800px) {
    display: flex;
    justify-content: space-between;

    & > div {
      overflow: hidden;
      width: 48%;

      * {
        margin-bottom: 0;
      }
    }
  }
`

const NotesLinks = styled.div`
  text-align: center;

  a {
    padding: 0 3px;
  }

  a::after {
    content: ' ⏍';
    display: inline-block;
    white-space: pre;
  }
`

const Link = ({ url }) => (
  <a href={url} rel="noopener noreferrer" target="_blank">
    {url}
  </a>
)

const Variant = memo(({ variant, methodData }) => (
  <div>
    <Heading hierarchy="4">{variant}</Heading>
    <Hightlight className="javascript">
      <Linkify component={Link}>{methodData[variant]}</Linkify>
    </Hightlight>
  </div>
))

const Block = memo(({ methodData }) =>
  Object.keys(methodData)
    .filter(variant => variant !== 'notes' && variant !== 'spec')
    .map(variant => <Variant key={variant} methodData={methodData} variant={variant} />)
)

export default memo(({ methodData, showTests }) => (
  <Fragment>
    <LineBlock>
      <Block methodData={methodData} />
    </LineBlock>
    <NotesLinks dangerouslySetInnerHTML={{ __html: methodData.notes }} />
    {methodData.spec && showTests ? <Spec code={methodData.spec} /> : null}
  </Fragment>
))
