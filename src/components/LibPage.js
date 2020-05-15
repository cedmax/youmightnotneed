import React, { Fragment, useCallback, useState, memo, useEffect } from 'react'
import styled from 'styled-components'
import Content from './ContentBlock'
import AnchoredBlock from './AnchoredBlock'
import Search from './Search'
import CodeComparison from './CodeComparison'
import dataFilter from '../helpers/data-filter'
import ShowTests from './ShowTests'

const Row = styled.div`
  background: white;
  padding: 2em;
  &:nth-child(2n) {
    background: #fafafa;
    border-bottom: 1px solid #eee;
  }
`

const Section = memo(({ method, section, showTests }) => (
  <AnchoredBlock key={method} title={method} hierarchy="3">
    <CodeComparison showTests={showTests} methodData={section[method]} />
  </AnchoredBlock>
))

const Block = memo(({ data, showTests, section }) =>
  Object.keys(data).map(method => (
    <Section
      showTests={showTests}
      method={method}
      section={data}
      key={`${section}-${method}`}
    />
  ))
)

export default memo(({ data: initialData }) => {
  const [showTests, setShowTests] = useState(false)
  const [value, setValue] = useState('')
  const [data, setData] = useState(initialData)

  const onChange = useCallback(
    ({ target: { value } }) => {
      setValue(value)
      setData(dataFilter(initialData, value))
    },
    [initialData]
  )

  useEffect(() => {
    setShowTests(false)
    setValue('')
    setData(initialData)
  }, [initialData])

  const showTestsToggle = useCallback(
    () => setShowTests(showTests => !showTests),
    []
  )

  return (
    <Fragment>
      <Content>
        <Search value={value} onChange={onChange} />
        <ShowTests value={showTests} onChange={showTestsToggle} />
      </Content>
      {Object.keys(data).map(section => (
        <Row key={section}>
          <AnchoredBlock title={section} hierarchy="2">
            <Block
              section={section}
              showTests={showTests}
              data={data[section]}
            />
          </AnchoredBlock>
        </Row>
      ))}
    </Fragment>
  )
})
