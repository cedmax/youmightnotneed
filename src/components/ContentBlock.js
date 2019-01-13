import styled from 'styled-components'

const Content = styled.div`
  padding: 3em;
  max-width: 50em;
  margin: auto;

  & + & {
    padding-top: 0;
  }

  h1 {
    background: #414141;
    padding: 0.2em;
    color: white;
    text-align: center;
  }

  a del {
    font-size: 85%;
    color: #606c76;
  }
`

export default Content
