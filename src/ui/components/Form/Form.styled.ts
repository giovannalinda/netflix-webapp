import { theme } from 'config'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Form = styled.form`
  button {
    width: 345px;
    height: 48px;
    border-radius: 4px;
    background: ${theme.colors.red[700]};
    color: ${theme.colors.white};
  }
`

export const Password = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  button {
    background: none !important;
    border: 0;
    bottom: 0;
    height: 40px;
    left: 325px;
    position: absolute;
    right: 0;
    transition: 1s;
    top: 28px;
    width: 30px;

    svg {
      color: ${theme.colors.white};
      margin: -7px 0 0 -50px;
      position: relative;
    }
  }
`
