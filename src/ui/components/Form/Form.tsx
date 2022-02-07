import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FiEye } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

import { TextField } from 'ui/TextField'

import * as S from './Form.styled'

type FormData = {
  name: string
  email: string
  password: string
}

export function Form() {
  const [textPass, setTextPass] = useState(true)

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>()

  function onSubmit(data: FormData) {
    const submit = {
      data,
    }
    reset()

    navigate('/', { replace: true })

    console.log(submit)
  }

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label='Name'
          id='name'
          placeholder='Your name here'
          errorMessage={errors.name?.message}
          {...register('name', {
            required: {
              value: true,
              message: 'All fields are mandatory',
            },
          })}
        />

        <TextField
          label='E-mail'
          placeholder='Your best e-mail'
          type='email'
          id='email'
          {...register('email', {
            required: true,
          })}
        />

        <S.Password>
          <TextField
            label='Password'
            id='password'
            placeholder='Your best password'
            type={textPass ? 'password' : 'text'}
            {...register('password', {
              required: true,
            })}
          />
          <button onClick={() => setTextPass(!textPass)} type='button'>
            <FiEye size={17} />
          </button>
        </S.Password>

        <button type='submit'>Go</button>
      </S.Form>
    </S.Container>
  )
}
