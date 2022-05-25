import styled from 'styled-components'

const Content = styled.div`
  padding: 3em 3em 1em;
  max-width: 50em;
  margin: auto;

  h1 {
    font-size: 2.6rem;
    strong {
      font-size: clamp(3.9rem, -0.875rem + 8.333vw, 5.2rem);
      display: block;
    }
  }

  & + & {
    padding-top: 0;
  }

  a del {
    font-size: 85%;
    color: var(--nc-tx-2);
  }

  p {
    line-height: 1.8;
  }
`

export default Content
