import styled from 'styled-components'
import { theme } from 'config'
import { banner } from 'assets'

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-height: 70rem;
  object-fit: cover;
  background: url(${banner});
  background-size: cover;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const Container = styled.div`
  transform: translateY(-5rem);

  img {
    width: 90rem;
    height: 30.5rem;
    transition: 0.8s;

    @media (max-width: 920px) {
      width: 440px;
      height: 390px;
      transition: 0.8s;
      transform: translateY(-5rem);
    }
  }

  p {
    font-size: 16px;
    color: ${theme.colors.white};
    max-width: 850px;
    padding: 3rem 3rem 0 0;

    @media (max-width: 920px) {
      transform: translateY(-5rem);
      min-width: 450px;
    }
  }

  button {
    width: 30rem;
    height: 6rem;
    background: ${theme.colors.red[700]};
    border-radius: 0.5rem;
    border: 0;
    color: ${theme.colors.white};
    transition: 300ms;
    margin-top: 3rem;

    @media (max-width: 920px) {
      transform: translateY(-6rem);
    }
  }
`
