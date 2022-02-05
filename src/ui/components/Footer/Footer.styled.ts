import { theme } from 'config'
import styled from 'styled-components'

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 17px;
    color: ${theme.colors.white};
  }
`
