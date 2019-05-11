import React, { Fragment, Component } from "react";
import styled from "styled-components";
import debounce from "debounce";
import Content from "./ContentBlock";
import AnchoredBlock from "./AnchoredBlock";
import Search from "./Search";
import CodeComparison from "./CodeComparison";
import dataFilter from "../helpers/data-filter";
import ShowTests from "./ShowTests";

const Row = styled.div`
  background: white;
  padding: 2em;
  &:nth-child(odd) {
    background: #fafafa;
    border-bottom: 1px solid #eee;
  }
`;

export default class LibPage extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.filter = debounce(this.filter.bind(this), 50, true);
    this.state = {
      value: "",
      showTests: false,
      data: this.props.data,
    };
  }

  onChange(e) {
    const { value } = e.target;

    this.setState({
      value,
    });

    this.filter(value);
  }

  filter(value) {
    const { data } = this.props;

    const newData = dataFilter(data, value);

    this.setState({
      data: newData,
    });
  }

  render() {
    const { data, value, showTests } = this.state;

    return (
      <Fragment>
        <Content>
          <Search value={value} onChange={this.onChange} />
          <ShowTests
            value={showTests}
            onChange={() => this.setState({ showTests: !showTests })}
          />
        </Content>
        {Object.keys(data).map(section => (
          <Row key={section}>
            <AnchoredBlock title={section} hierarchy="2">
              {Object.keys(data[section]).map(method => (
                <AnchoredBlock key={method} title={method} hierarchy="3">
                  <CodeComparison
                    showTests={showTests}
                    methodData={data[section][method]}
                  />
                </AnchoredBlock>
              ))}
            </AnchoredBlock>
          </Row>
        ))}
      </Fragment>
    );
  }
}
