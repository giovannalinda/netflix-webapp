import styled from 'styled-components'
import { theme } from 'config'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const InputLabel = styled.label`
  font-size: 14px;
  color: ${theme.colors.white};
`

export const Input = styled.input`
  width: 345px;
  height: 48px;
  box-sizing: border-box;
  border-radius: 4px;
  margin: 10px 0;
  padding: 0 20px;
  border: 0.3px solid ${theme.colors.neutral[300]};
  background: ${theme.colors.black};
  color: #ccc;

  :focus {
    border: 1px solid ${theme.colors.white};
    background: transparent;
  }
`

export const ErrorMessage = styled.span`
  color: ${theme.colors.red[700]};
  font-size: 10px;
`
