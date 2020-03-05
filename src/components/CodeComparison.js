import React, { Fragment, memo } from 'react'
import styled from 'styled-components'
import Linkify from 'react-simple-linkify'
import Hightlight from 'react-highlight.js'
import Heading from './Heading'
import Spec from './Spec'

const LineBlock = styled.div`
  padding-bottom: 7.5rem;
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
  max-width: 768px;

  a {
    padding: 0 3px;
  }
`

const Resources = styled.span`
  font-size: 85%;

  a {
    margin-left: 0.5rem;
    text-decoration: underline;
    text-decoration-style: dotted;
  }
`

const Link = ({ url }) => (
  <a href={url} rel="noopener noreferrer" target="_blank">
    {url}
  </a>
)

const Variant = memo(({ variant, methodData }) => (
  <div>
    <Heading hierarchy="4">{variant} </Heading>
    <Hightlight className="javascript">
      <Linkify component={Link}>{methodData[variant]}</Linkify>
    </Hightlight>
    {variant === 'plain js' && methodData.resources && (
      <Resources dangerouslySetInnerHTML={{ __html: methodData.resources }} />
    )}
  </div>
))

const Block = memo(({ methodData }) =>
  Object.keys(methodData)
    .filter(variant => !['notes', 'resources', 'spec'].includes(variant))
    .map(variant => (
      <Variant key={variant} methodData={methodData} variant={variant} />
    ))
)

export default memo(({ methodData, showTests }) => (
  <Fragment>
    <NotesLinks dangerouslySetInnerHTML={{ __html: methodData.notes }} />
    <LineBlock>
      <Block methodData={methodData} />
    </LineBlock>
    {methodData.spec && showTests ? <Spec code={methodData.spec} /> : null}
  </Fragment>
))
