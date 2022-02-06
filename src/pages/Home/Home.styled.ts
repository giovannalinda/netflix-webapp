import styled from 'styled-components'
import { theme } from 'config'

export const Container = styled.main`
  transform: translateY(-7rem);

  h1 {
    color: ${theme.colors.white};
    margin-left: 35px;
    padding-bottom: 10px;

    @media (max-width: 595px) {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 100px;
      padding-bottom: 3rem;
    }
  }
`

export const MoviesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 265px));
  text-align: center;
  justify-content: center;
  grid-row-gap: 15px;

  li button {
    border: 0;
    background: transparent;
    transition: 300ms;
    cursor: pointer;

    img {
      width: 330px;
      height: 200px;
      border-radius: 4px;
    }

    &:hover {
      transform: translateY(-5px);
    }

    &:active {
      transform: translateY(-5px) scale(0.98);
    }
  }
`
