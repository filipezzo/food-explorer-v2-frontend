import styled from 'styled-components'

export const Container = styled.footer`
  grid-area: footer;
  width: 100%;
  display: flex;
  gap: 3rem;
  padding: 0 19.75rem;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors['dark-600']};
  height: 100%;
  img {
    width: calc(12rem + 4vw);
  }
  p {
    width: fit-content;
    white-space: nowrap;
  }
`
