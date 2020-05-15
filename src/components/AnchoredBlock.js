import React, { Fragment, memo } from 'react'
import styled from 'styled-components'
import Heading from './Heading'

const normaliseTitle = title => title.replace(/^([0-9]+-)/, '')

const Anchor = styled.a`
  text-decoration: none;
  cursor: pointer;
  position: relative;

  &::before {
    position: absolute;
    left: -0.7em;
    font-family: monospace;
    content: '  ';
    white-space: pre;
  }

  &:hover::before {
    content: '# ';
  }
`

export default memo(({ title, hierarchy, children }) => (
  <Fragment>
    {title ? (
      <Heading hierarchy={hierarchy}>
        <Anchor href={`#${normaliseTitle(title)}`} name={normaliseTitle(title)}>
          {normaliseTitle(title)}
        </Anchor>
      </Heading>
    ) : null}
    {children}
  </Fragment>
))
