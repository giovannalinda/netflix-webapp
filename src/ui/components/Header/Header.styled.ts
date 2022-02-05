import styled from 'styled-components'
import { theme } from 'config'

export const Header = styled.header`
  height: 100px;

  nav {
    position: fixed;
    width: 100%;
    background: ${theme.colors.black};
    height: 100px;
    z-index: 1;
  }

  ul {
    text-align: center;
    margin-top: 40px;
  }

  li {
    display: inline;
    padding: 30px;
  }

  a {
    margin: 0 auto;
    color: ${theme.colors.white};
    font-size: 16px;
    transition: 0.5s;

    :hover {
      color: ${theme.colors.red[700]};
    }
  }

  img {
    width: 100%;
    height: 700px;
    object-fit: cover;
  }
`

export const ContentHeader = styled.div`
  margin: -640px 0 0 50px;

  img {
    width: 900px;
    height: 350px;
  }

  p {
    font-size: 16px;
    color: ${theme.colors.white};
    max-width: 850px;
    padding: 30px 0 0 0;
  }

  button {
    width: 300px;
    height: 60px;
    background: ${theme.colors.red[700]};
    border-radius: 5px;
    border: 0;
    color: ${theme.colors.white};
    transition: 1s;
    margin-top: 30px;

    :hover {
      width: 320px;
      height: 70px;
    }
  }

`
