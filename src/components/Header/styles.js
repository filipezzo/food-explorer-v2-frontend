import styled from 'styled-components'

export const Container = styled.header`
  padding: 0 19.75rem;
  background: ${({ theme }) => theme.colors['dark-600']};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;

  img {
    width: calc(12rem+4vw);
  }

  .menu-mobile {
    display: none;
  }
  position: sticky;
  z-index: 99999;
  top: 0;

  @media (max-width: 768px) {
    display: flex;
    padding: 4rem 12rem;

    img {
      width: 20rem;
    }
    align-items: center;

    .menu-mobile {
      display: block;
    }
  }
`

export const Menu = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  gap: 3rem;

  .logout {
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: 0;
  }

  .btn {
    max-width: 13.5rem;
  }

  .dish {
    white-space: nowrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`

export const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 1rem;
  width: 100%;

  label {
    display: flex;
    align-items: center;
    gap: 0.875rem;
    background: ${({ theme }) => theme.colors['dark-900']};
    flex: 1;
    padding: 0.75rem 0.875rem;
    border-radius: 5px;
  }

  label svg {
    margin-left: 6.25rem;
  }

  label input {
    width: 100%;
    background: transparent;
    border: 0;
    outline: none;
  }

  @media (max-width: 768px) {
    display: none;
    label {
      display: none;
    }
  }
`
