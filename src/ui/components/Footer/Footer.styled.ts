import { theme } from 'config'
import styled, { keyframes } from 'styled-components'

const goBack = keyframes`
  from {
    transform: translateY(20px);
  }

  to {
    transform: translateX(0);
  }
`

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;

  p {
    font-size: 17px;
    color: ${theme.colors.white};
    animation: ${goBack} 1s infinite alternate;

    a {
      color: ${theme.colors.red[700]};
    }
  }
`
