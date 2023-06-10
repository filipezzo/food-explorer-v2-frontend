import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  margin-inline: auto;
`
export const Content = styled.div`
  padding-inline: 7.75rem;
  margin-inline: auto;

  @media (max-width: 768px) {
    padding-inline: 0;
    margin-inline: 0;
  }
`
export const Hero = styled.div`
  width: 70rem;
  height: 16.25rem;
  margin-top: 10.25rem;
  margin-bottom: 3.875rem;
  border-radius: 8px;
  display: flex;
  justify-content: flex-end;
  background: linear-gradient(rgb(9, 30, 38) 0%, rgb(0, 19, 28) 100%);
  align-items: center;
  position: relative;
  img {
    width: max(39.5rem);
    position: absolute;
    bottom: 0;
    left: -5rem;
  }

  div {
    margin-right: 6.25rem;
  }

  div h1 {
    font-family: ${({ theme }) => theme.fonts.poppins};
    font-size: 2.5rem;
    line-height: 140%;
    color: ${({ theme }) => theme.colors['light-300']};
  }

  div p {
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 1rem;
    line-height: 100%;
    color: ${({ theme }) => theme.colors['light-300']};
  }
`
export const Meals = styled.section`
  width: 70rem;
  margin-bottom: 2.875rem;
  overflow-x: hidden;
  h2 {
    margin-bottom: 1.4375rem;
  }
  .meals-section {
    display: flex;
    gap: 1.6875rem;
  }
`
export const Dessert = styled.section`
  width: 70rem;

  margin-bottom: 2.875rem;
  overflow-x: hidden;
  h2 {
    margin-bottom: 1.4375rem;
  }
  .meals-section {
    display: flex;
    gap: 1.6875rem;
  }
`

export const Drinks = styled.section`
  width: 70rem;

  margin-bottom: 2.875rem;
  overflow-x: hidden;
  h2 {
    margin-bottom: 1.4375rem;
  }
  .meals-section {
    display: flex;
    gap: 1.6875rem;
  }
`
