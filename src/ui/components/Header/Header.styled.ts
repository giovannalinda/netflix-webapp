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
    box-shadow: 0 0.1px 0.5px ${theme.colors.neutral[300]};

    ul {
      text-align: center;
      margin-top: 40px;

      li {
        display: inline;
        padding: 30px;

        a {
          margin: 0 auto;
          color: ${theme.colors.white};
          font-size: 16px;
          transition: 0.5s;

          :hover {
            color: ${theme.colors.red[700]};
          }
        }
      }
    }
  }
`
