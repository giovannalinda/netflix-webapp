import styled from 'styled-components/macro'
import { theme } from 'config'

export const Modal = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Container = styled.div`
  background: ${theme.colors.black};
  width: 70%;
  color: ${theme.colors.white};
  min-height: 35%;
  padding: 10px;
  border-radius: 5px;

  button {
    color: ${theme.colors.white};
    border-radius: 5px;
    border: none;
    font-size: 12px;
    margin-top: 10px;
  }
`
