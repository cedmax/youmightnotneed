import React, { Fragment, memo, useState, useCallback } from 'react'
import styled from 'styled-components'
import Linkify from 'react-simple-linkify'
import Hightlight from 'react-highlight/lib/optimized'
import Heading from './Heading'
import Spec from './Spec'

const LineBlock = styled.div`
  padding-bottom: 5.5rem;
  margin: auto;

  code {
    padding: 15px;
    background: var(--custom-bk-code);
    border: 0;
    border-left: 3px solid var(--nc-lk-1);
    border-radius: 0;
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

  code {
    color: black;
    background: var(--custom-bk-code);
    border-radius: 7px;
    padding: 3px 5px;
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

const LookAtTestButton = styled.button`
  margin: 1em 0 2em;
`

const Link = ({ url }) => (
  <a href={url} rel="noopener noreferrer" target="_blank">
    {url}
  </a>
)

const showTestStr = 'check the tests for more details'
const ForceShowTestLink = memo(({ children, setForceShowTest }) => {
  const { children: code } = children.props.children.props
  const onClick = useCallback(() => setForceShowTest(true), [setForceShowTest])

  if (code.includes(showTestStr)) {
    const splitCode = code.replace(`\n// => ${showTestStr}`, '')

    return (
      <>
        <Hightlight className="javascript">
          <Linkify component={Link}>{splitCode}</Linkify>
        </Hightlight>
        <LookAtTestButton onClick={onClick}>{showTestStr}</LookAtTestButton>
      </>
    )
  }

  return children
})

const handleCopyEvent = e => {
  const text = `// WARNING: This is not a drop in replacement solution and
// it might not work for some edge cases. Test your code! 
${window.getSelection().toString()}`

  e.clipboardData.setData('text/plain', text)
  e.preventDefault()
}

const Variant = memo(
  ({ variant, methodData, setForceShowTest, id, openModal }) => (
    <div onCopy={variant == 'plain js' ? e => handleCopyEvent(e) : () => {}}>
      <Heading hierarchy="4">
        {variant}
        {variant == 'plain js' ? (
          <button className="button button-clear" onClick={() => openModal(id)}>
            see on codesandbox.io
          </button>
        ) : (
          ''
        )}
      </Heading>
      <ForceShowTestLink setForceShowTest={setForceShowTest}>
        <Hightlight className="javascript">
          <Linkify component={Link}>{methodData[variant]}</Linkify>
        </Hightlight>
      </ForceShowTestLink>
      {variant === 'plain js' && methodData.resources && (
        <Resources dangerouslySetInnerHTML={{ __html: methodData.resources }} />
      )}
    </div>
  )
)

const Block = memo(({ methodData, setForceShowTest, id, openModal }) =>
  Object.keys(methodData)
    .filter(variant => !['notes', 'resources', 'spec'].includes(variant))
    .map(variant => (
      <Variant
        id={id}
        openModal={openModal}
        setForceShowTest={setForceShowTest}
        key={variant}
        methodData={methodData}
        variant={variant}
      />
    ))
)

export default memo(({ methodData, showTests, id, openModal }) => {
  const [forceShowTest, setForceShowTest] = useState(false)
  return (
    <Fragment>
      <NotesLinks dangerouslySetInnerHTML={{ __html: methodData.notes }} />
      <LineBlock>
        <Block
          id={id}
          openModal={openModal}
          setForceShowTest={setForceShowTest}
          methodData={methodData}
        />
      </LineBlock>
      {methodData.spec && (showTests || forceShowTest) ? (
        <Spec code={methodData.spec} />
      ) : null}
    </Fragment>
  )
})
