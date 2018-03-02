import React, { Fragment } from 'react'
import styled from 'styled-components'
import Hightlight from 'react-highlight.js'
import Heading from '../components/Heading'
import Spec from '../components/Spec'

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

export default ({ methodData, showTests }) => (
  <Fragment>
    <LineBlock>
      {Object.keys(methodData)
        .filter(variant => variant !== 'notes' && variant !=='spec')
        .map(variant =>
          (<div key={variant}>
            <Heading hierarchy="4">
              {variant}
            </Heading>
            <Hightlight className="javascript">
              {methodData[variant]}
            </Hightlight>
          </div>)
        )}
    </LineBlock>
    <NotesLinks dangerouslySetInnerHTML={{ __html: methodData.notes }} />
    { methodData.spec && showTests ? <Spec code={methodData.spec} /> : null }
  </Fragment>
)