import React from 'react'

import { useInputValue } from '../../hooks/useInputValue'
import { SubmitButton } from '../SubmitButton/index'

import {Error, Form, Input, Title} from './styles'

export const UserForm = ( { disabled, error, onSubmit, title }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({ 
      email: email.value,
      password: password.value
    })
  }
  
  return (
    <>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input disabled={disabled} placeholder='Email' type="email" {...email} require='true' />
        <Input disabled={disabled} placeholder='Password' type="password" {...password}/>
        <SubmitButton disabled={disabled}>
          {title}
        </SubmitButton>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  )
}
