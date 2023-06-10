import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
`

export const Content = styled.div``

export const btnBack = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  a {
    text-decoration: none;
    color: #fff;
    display: flex;
    align-items: center;
  }
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 2.6rem;

  img {
    border-radius: 9999px;
  }
  > div {
    display: flex;
    align-items: center;
    gap: 3rem;
  }
  img {
    width: 400px;
    height: 400px;
  }
  form {
    width: 43rem;
    height: 18.75rem;
    display: flex;
    flex-direction: column;
  }

  form h2 {
    font-size: 2.5rem;
    font-family: ${({ theme }) => theme.fonts.poppins};
    font-weight: 500;
    margin-bottom: 1.5rem;
  }

  form p {
    font-family: ${({ theme }) => theme.fonts.poppins};
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    .divres {
      flex-direction: column;
    }

    form {
      justify-content: center;
      align-items: center;
    }
  }
`

export const Ingredients = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const Client = styled.div`
  div button {
    background: none;
    border: 0;
  }
  display: flex;
  margin-bottom: 2.875rem;
  width: 100%;
  align-items: center;
  gap: 3rem;
  span {
    font-weight: bold;
    font-size: 1.25rem;
    margin-inline: 0.875rem;
  }

  .include-btn {
    padding: 0.75rem 1.5rem;
    background: ${({ theme }) => theme.colors['tomato-100']};
    border-radius: 5px;
    font-size: 0.875rem;
    height: 3rem;
  }

  @media (max-width: 768px) {
    .include-btn {
      width: 20rem;
      align-items: center;
      margin-left: 12rem;
    }
  }
`
