import React from 'react'
import { LIKE_PHOTO } from '../querys/LIKE_PHOTO'
import { Mutation } from 'react-apollo'

export const ToggleLikeMutation = ({ children }) => {
  return (
    <Mutation mutation={LIKE_PHOTO}>
      { children }
    </Mutation>
  )
}