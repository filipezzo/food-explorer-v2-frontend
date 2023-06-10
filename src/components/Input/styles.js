import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 100%;

  > label {
    color: ${({ theme }) => theme.colors['light-400']};
    font-size: ${({ theme }) => theme.textSizes['roboto-300']};
    display: ${({ hasLabel }) => (hasLabel ? 'block' : 'none')};
    margin-bottom: 0.5rem;
  }

  > input {
    width: 100%;
    margin-bottom: 2rem;
    padding: 0.75rem 0.875rem;
    background: ${({ theme }) => theme.colors['dark-900']};
    border: 0;
    border-radius: 8px;

    ${({ hasBorder }) =>
      hasBorder &&
      css`
        border: 1px solid #fff;
      `}
  }
`
