import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: auto;

  color: ${({ theme }) => theme.colors['light-base']};

  > div {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    font-size: ${({ theme }) => theme.textSizes['roboto-2xl']};
  }
  > img {
    width: 3.125rem;
    height: 3.125rem;
  }

  > form {
    max-width: 30rem;
    max-height: 33rem;
    background: ${({ theme }) => theme.colors['dark-700']};
    -webkit-box-shadow: 0px 0px 10px 5px #00070a;
    box-shadow: 0px 0px 10px 5px #00070a;
    padding: 4rem;
    border-radius: 16px;
    > h2 {
      margin-bottom: 2rem;
      text-align: center;
    }

    > a {
      text-decoration: none;
      color: #fff;
      text-align: center;
      display: block;
      margin-top: 2rem;
    }
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    margin: auto;
    > div {
      font-size: ${({ theme }) => theme.textSizes['roboto-400']};
    }
  }

  @media (min-width: 1001px) {
    > form {
      width: 30rem;
      height: 33rem;
    }
  }
`
