import { theme } from 'config'
import styled from 'styled-components'

export const Container = styled.div`
  img {
    width: 100%;
    object-fit: cover;
    max-height: 74rem;
  }
`

export const CategoriesList = styled.ul`
  width: 100%;
`

export const CategoryItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  & + li {
    margin-top: 3rem;
  }

  h1 {
    color: ${theme.colors.white};
    margin-left: 4rem;
    padding-bottom: 1rem;

    @media (max-width: 595px) {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 9rem;
      padding-bottom: 3rem;
    }
  }
`
export const MoviesList = styled.ul`
  display: flex;
  align-items: center;
  overflow-x: scroll;
  margin: 0 4rem;
  padding-top: 1rem;
  width: 100%;

  &::-webkit-scrollbar {
    height: 0;
  }
`

export const MovieItem = styled.li`
  & + li {
    margin-left: 1.6rem;
  }

  button {
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
