import React from "react";
import styled from "styled-components";
import Hightlight from "react-highlight.js";
import Heading from "./Heading";

const Tests = styled.div`
  padding-bottom: 4em;
`;

export default ({ code }) => (
  <Tests>
    <Heading hierarchy="4">Test</Heading>
    <Hightlight className="javascript">{code}</Hightlight>
  </Tests>
);
