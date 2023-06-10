import styled from 'styled-components'

export const Container = styled.div`
  width: fit-content;
  padding: 0px 1rem;
  display: flex;
  align-items: center;
  height: 3rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
  background-color: ${({ isNew }) => (isNew ? 'transparent' : '#1A2327')};
  color: ${({ theme, isNew }) =>
    isNew ? theme.colors['light-500'] : '#FFFFFF'};

  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.colors['light-500']}` : 'none'};

  border-radius: 0.8rem;

  button {
    border: none;
    background: none;
  }

  .button-delete {
    color: #ffffff;
  }

  .button-add {
    color: ${({ theme }) => theme.colors['light-500']};
  }

  > input {
    max-width: 13rem;
    height: 2.8rem;

    color: ${({ theme, isNew }) =>
      isNew ? theme.colors['light-500'] : '#FFFFFF'};
    background: transparent;

    border: none;
  }
`
