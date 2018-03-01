import React, { Fragment } from 'react'
import styled from 'styled-components'
import Heading from '../components/Heading'

const Anchor = styled.a`
  text-decoration: none;
  cursor: pointer;
  position:relative;

  &::before {
    position:absolute;
    left: -.7em;
    font-family: monospace;
    content: '  ';
    white-space: pre;
  }

  &:hover::before {
    content: '# ';
  }
`

export default ({ title, hierarchy, children }) => (
  <Fragment>
    {title ? (
      <Heading hierarchy={hierarchy}>
        <Anchor href={`#${title}`} name={title}>
          {title}
        </Anchor>
      </Heading>
    ) : null}
    {children}
  </Fragment>
)
