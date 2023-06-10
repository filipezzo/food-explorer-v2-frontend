import styled from 'styled-components'

export const Container = styled.div`
  background: ${({ theme }) => theme.colors['dark-200']};
  width: 19rem;
  height: 34rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.9375rem;
  align-items: center;
  border-radius: 8px;

  button {
    border: 0;
    background: none;
    align-self: flex-end;
    padding: 1rem 1.125rem;
  }

  .img-container {
    display: flex;
    justify-content: center;
  }

  .margin-btn-adm {
    margin-bottom: 3.4rem;
  }

  img {
    width: 176px;
    height: 176px;
    border-radius: 99999px;
  }

  .description {
    text-align: center;
  }
  .clicked {
    color: red;
  }

  h3 {
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-family: ${({ theme }) => theme.fonts.poppins};
    font-weight: 700;
    color: ${({ theme }) => theme.colors['light-300']};
    line-height: 140%;
  }

  p {
    color: ${({ theme }) => theme.colors['light-300']};
    font-size: 0.875rem;
    line-height: 160%;
  }

  strong {
    color: ${({ theme }) => theme.colors['cake-200']};
    font-size: 2rem;
    line-height: 160%;
  }

  @media (max-width: 768px) {
    width: 22rem;

    height: 30rem;
    padding: 1.5rem;
    .description {
      display: none;
    }
    img {
      width: 150px;
      height: 150px;
    }

    strong {
      padding-bottom: 4.3rem;
    }
  }
`

export const Client = styled.div`
  padding-bottom: 2.875rem;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;

  span {
    font-weight: bold;
    font-size: 1.25rem;
  }

  .include-btn {
    padding: 0.75rem 1.5rem;
    background: ${({ theme }) => theme.colors['tomato-100']};
    border-radius: 5px;
    font-size: 0.875rem;
    height: 3rem;
  }
`
