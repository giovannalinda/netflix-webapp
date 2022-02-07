import {
  InputHTMLAttributes,
  forwardRef,
  ForwardRefRenderFunction,
} from 'react'

import * as S from './TextField.styled'

type Props = {
  label: string
  errorMessage?: string
} & InputHTMLAttributes<HTMLInputElement>

const TextFieldElement: ForwardRefRenderFunction<HTMLInputElement, Props> = (
  // eslint-disable-next-line
  { label, errorMessage, ...rest },
  ref,
) => {
  return (
    <S.Container ref={ref}>
      <S.InputLabel htmlFor={rest.id}>{label}</S.InputLabel>
      <S.Input {...rest} />
      {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
    </S.Container>
  )
}

export const TextField = forwardRef(TextFieldElement)
