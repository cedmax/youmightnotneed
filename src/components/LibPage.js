import React, { Fragment, Component } from 'react'
import styled from 'styled-components'
import debounce from 'debounce'
import Hightlight from 'react-highlight.js'
import AnchoredBlock from '../components/AnchoredBlock'
import Heading from '../components/Heading'
import Content from '../components/ContentBlock'

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

const Row = styled.div`
  background: white;
  padding: 2em;
  &:nth-child(odd){
    background: #fafafa;
    border-bottom: 1px solid #eee;
  }
`

const Input = styled.input`
  width: 100%;
  padding: .5em;
  font-size: 120%;
`

export default class LibPage extends Component {
  constructor (props) {
    super(props)

    this.onChange = this.onChange.bind(this)
    this.filter = debounce(this.filter.bind(this), 50, true)
    this.state = {
      value: '',
      data: this.props.data,
    }
  }

  onChange (e) {
    const { value } = e.target

    this.setState({
      value,
    })

    this.filter(value)
  }

  filter (value) {
    const { data } = this.props

    const newData = Object.keys(data).reduce((cache, section) => {
      const methods = Object.keys(data[section]).filter(method => method.indexOf(value)===0)
      cache[section] = methods.reduce((innerCache, method) => {
        innerCache[method] = data[section][method]
        return innerCache
      }, {})

      if (!Object.keys(cache[section]).length) {
        delete cache[section]
      }

      return cache
    }, {})

    this.setState({
      data: newData,
    })
  }

  render () {
    const { data, value } = this.state

    return (
      <Fragment>
        <Content><Input onChange={this.onChange} value={value} /></Content>
        <AnchoredBlock>
          {Object.keys(data).map(section =>
            (<Row key={section}>
              <AnchoredBlock title={section} hierarchy="2">
                {Object.keys(data[section]).map(method =>
                  (<AnchoredBlock key={method} title={method} hierarchy="3">
                    <Fragment>
                      <LineBlock>
                        {Object.keys(data[section][method])
                          .filter(variant => variant !== 'notes')
                          .map(variant =>
                            (<div key={variant}>
                              <Heading hierarchy="4">
                                {variant}
                              </Heading>
                              <Hightlight className="javascript">
                                {data[section][method][variant]}
                              </Hightlight>
                            </div>)
                          )}
                      </LineBlock>
                      <NotesLinks dangerouslySetInnerHTML={{ __html: data[section][method].notes }} />
                    </Fragment>
                  </AnchoredBlock>)
                )}
              </AnchoredBlock>
            </Row>)
          )}
        </AnchoredBlock>
      </Fragment>
    )
  }
}
