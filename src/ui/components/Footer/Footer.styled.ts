import { theme } from 'config'
import styled from 'styled-components'

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;

  p {
    font-size: 17px;
    color: ${theme.colors.white};
    animation: go-back 1s infinite alternate;

    a {
      color: ${theme.colors.red[700]};
    }

    @keyframes go-back {
    from {
      transform: translateY(20px);
    }
    to {
      transform: translateX(0);
    }
  }
  }
`
