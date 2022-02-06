import styled from 'styled-components'
import { theme } from 'config'

export const ContentMain = styled.main`
  margin-top: 70px;

  h1 {
    color: ${theme.colors.white};
    margin-left: 30px;
    padding-bottom: 10px;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 265px));
    text-align: center;
    justify-content: center;
    margin: 0 0 20px 0;
    grid-row-gap: 10px;

    img {
      width: 330px;
      height: 200px;
      border-radius: 4px;
      margin-left: 15px;
      transition: 1s;
      cursor: pointer;

      :hover {
        width: 340px;
        height: 210px;
      }
    }
  }


`
