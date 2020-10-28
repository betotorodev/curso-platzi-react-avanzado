import React from 'react'

//components
import { UserForm } from '../components/UserForm/index'

//utilities
import Context from '../Context'

export const NotRegisterUser = () => {
  return (
    <Context.Consumer>
      {
        ({ activateAuth }) => {
          return (
            <UserForm onSubmit={activateAuth}/>
          )
        }
      }
    </Context.Consumer>
  )
}

