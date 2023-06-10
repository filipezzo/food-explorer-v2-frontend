import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  padding: 0.75rem 2rem;
  background: ${({ theme }) => theme.colors['tomato-100']};
  font-family: ${({ theme }) => theme.fonts.poppins};
  border: 0;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
`
