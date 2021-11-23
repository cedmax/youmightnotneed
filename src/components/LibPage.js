import React, { Fragment, useCallback, useState, memo, useEffect } from 'react'
import styled from 'styled-components'
import Content from './ContentBlock'
import AnchoredBlock from './AnchoredBlock'
import Search from './Search'
import CodeComparison from './CodeComparison'
import dataFilter from '../helpers/data-filter'
import ShowTests from './ShowTests'
import Modal from './Modal'

const Row = styled.div`
  background: white;
  padding: 3em;

  &:nth-child(2n) {
    background: #fafafa;
    border-bottom: 1px solid #eee;
  }
`

const Section = memo(({ method, data, section, showTests, frw, openModal }) => (
  <AnchoredBlock key={method} title={method} hierarchy="3">
    <CodeComparison
      openModal={openModal}
      id={`${frw}/${section}/${method}`}
      showTests={showTests}
      methodData={data[method]}
    />
  </AnchoredBlock>
))

const Block = memo(({ data, showTests, section, frw, openModal }) =>
  Object.keys(data).map(method => (
    <Section
      openModal={openModal}
      frw={frw}
      showTests={showTests}
      method={method}
      section={section}
      data={data}
      key={`${section}-${method}`}
    />
  ))
)

export default memo(({ data: initialData, frw }) => {
  const [showTests, setShowTests] = useState(false)
  const [value, setValue] = useState('')
  const [data, setData] = useState(initialData)
  const [embed, setEmbed] = useState()

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

  const closeModal = useCallback(() => setEmbed(), [])
  const openModal = useCallback(id => setEmbed(id), [])

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
              openModal={openModal}
              frw={frw}
              section={section}
              showTests={showTests}
              data={data[section]}
            />
          </AnchoredBlock>
        </Row>
      ))}
      <Modal id={embed} close={closeModal} />
    </Fragment>
  )
})
