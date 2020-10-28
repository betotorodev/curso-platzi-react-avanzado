import React from 'react'
import { REGISTER } from '../querys/REGISTER'
import { Mutation } from 'react-apollo'

export const RegisterMutation = ({ children }) => {
  return( 
    <Mutation mutation={REGISTER}> 
      {children}
    </Mutation>
  )
}