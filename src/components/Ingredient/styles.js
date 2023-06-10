import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 3rem;
  button {
    background: ${({ theme }) => theme.colors['dark-1000']};
    padding: 0.25rem 0.5rem;
    border-radius: 5px;
    border: 0;
  }
`
