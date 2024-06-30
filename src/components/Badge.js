import styled from 'styled-components'

const Badge = styled.a`
  position: fixed;
  top: 0;
  right: 0;

  svg {
    fill: var(--nc-tx-1);
  }
`

export default () => (
  <Badge
    target="_blank"
    href="https://github.com/cedmax/youmightnotneed"
    rel="noopener noreferrer"
  >
    <svg height="60" width="60" viewBox="0 0 80 80">
      <path d="M42.48 32.81c-1.27-.6-3.04-2-2.32-4.87 0 0 .58-2.05-.67-3.52 0 0-1.35-1.38-.93.73 0 0 .48 1.31-.48 3.52 0 0-1.57 3.05 2.58 5.95l-2.2 2.18H36.8L0 0h80v80L45.44 45.44l-.4-.88c-.07-.35-.1-.7.08-.88l3.74-3.71c1.28-1.28 1.67-2.56 1.6-3.46 3.4 2.69 7.75 4.74 13-.51a7.5 7.5 0 0 0 2.27-5.09 6.95 6.95 0 0 0 3.49-3.74s-.8-1.5-5.19-2.34c-.77-1.4-1.79-2.75-2.94-3.9a18.77 18.77 0 0 0-3.87-2.95c-.87-4.38-2.37-5.15-2.37-5.15-2.63 1.12-3.55 2.98-3.75 3.49a7.52 7.52 0 0 0-5.08 2.24c-5.22 5.25-3.2 9.6-.52 13-.73-.07-1.7.18-2.72.95z"></path>
    </svg>
  </Badge>
)
