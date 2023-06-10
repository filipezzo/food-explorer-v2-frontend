import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  padding-inline: 7.75rem;
  margin-inline: auto;

  @media (max-width: 768px) {
    padding-inline: 0;
    flex-direction: column;
  }
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 73.75rem;
  flex: 1;
  h2 {
    margin-top: 1.5rem;
    margin-bottom: 2rem;
  }
`
export const MainForm = styled.form`
  display: flex;
  flex-direction: column;

  .line1 {
    display: flex;
    gap: 2rem;
  }
  .line2 {
    margin-top: 2rem;
    margin-bottom: 2rem;
    display: flex;
    gap: 2rem;
  }

  .input {
    display: flex;
    font-size: 0.875rem;
    padding: 0.5rem;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    background: ${({ theme }) => theme.colors['dark-800']};
    border: none;
    border-radius: 0.5rem;
    height: 3rem;
  }
  .inputBox {
    width: 14.3rem;
  }
  .box label {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .select {
    padding: 1rem;
  }
  input[type='file'] {
    display: none;
  }

  .inputBox2 {
    width: 29rem;
  }

  .ingredientsL {
    width: 52rem;
  }

  .price {
    width: 20rem;
  }

  button {
    align-self: flex-end;
    margin-top: 2rem;
    color: white;
    border-radius: 5px;
    background: ${({ theme }) => theme.colors['tomato-400']};
    font-family: ${({ theme }) => theme.colors.poppins};
    padding: 0.75rem 1.5rem;
    font-size: 0.875rem;
    font-weight: 500;
  }

  .ingredients {
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    background: ${({ theme }) => theme.colors['dark-800']};
    width: 51.5rem;

    margin-bottom: 0;

    border-radius: 0.8rem;
  }

  .ingredientsTag {
    display: flex;
    justify-content: space-between;
    gap: 3.2rem;
  }

  @media (max-width: 768px) {
    .line1 {
      flex-direction: column;
    }
    .inputBox2 {
      width: 100%;
    }

    button {
      margin-right: 10rem;
    }
  }
`

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
