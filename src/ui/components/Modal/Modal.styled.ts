import styled from 'styled-components/macro'
import { theme } from 'config'

export const Modal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    text-align: center;
    padding: 10px;
  }
`

export const Container = styled.div`
  background: ${theme.colors.black};
  width: 450px;
  color: ${theme.colors.white};
  min-height: 65%;
  border-radius: 5px;

  button {
    color: ${theme.colors.white};
    border: none;
    padding: 20px;
  }
`
