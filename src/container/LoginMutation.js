import React from 'react'
import { LOGIN } from '../querys/LOGIN'
import { Mutation } from 'react-apollo'

export const LoginMutation = ({ children }) => {
  return( 
    <Mutation mutation={LOGIN}> 
      {children}
    </Mutation>
  )
}