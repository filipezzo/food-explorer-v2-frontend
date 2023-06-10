import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
`

export const TextareaInput = styled.textarea`
  margin-top: 1rem;
  width: 74rem;
  height: 17.2rem;
  color: white;
  resize: none;
  padding: 1.4rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors['dark-800']};
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1.6rem;
  border: 0;
  &::placeholder {
    color: #7c7c8a;
    font-size: 1rem;
  }
`
