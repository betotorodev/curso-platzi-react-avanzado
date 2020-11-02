import React from 'react'

//components
import { UserForm } from '../components/UserForm/index'

//utilities
import Context from '../Context'
import { RegisterMutation } from '../container/RegisterMutation'

export const NotRegisterUser = () => {
  return (
    <Context.Consumer>
      {
        ({ activateAuth }) => {
          return (
            <>
              <RegisterMutation>
                {
                  (register, { data, loading, error }) => {
                    const onSubmit = ({ email, password }) => {
                      const input = { email, password }
                      const variables = { input }
                      register({ variables })
                        .then(activateAuth)
                    }

                    const errorMsg = error && 'El usuario ya existe o hay un problema'

                    return <UserForm disabled={loading} error={errorMsg} title='Registrarse' onSubmit={onSubmit}/>
                  }
                }
              </RegisterMutation>
              <UserForm title='Iniciar Sesión' onSubmit={activateAuth}/>
            </>
          )
        }
      }
    </Context.Consumer>
  )
}

