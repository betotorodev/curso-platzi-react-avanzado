import React from 'react'
import { Router } from '@reach/router'

//components
import { Home } from './pages/Home.js'
import { Detail } from './pages/Detail'
import { Navbar } from './components/Navbar'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisterUser } from './pages/NotRegisterUser'

//utils
import Context from './Context'

//css
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo/index'

const App = () => {

  return (
    <>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />
      </Router>
      <Context.Consumer>
          {
            ({ isAuth }) => 
              isAuth
                ? <Router>
                    <Favs path='/favs' />
                    <User path='/user' />
                  </Router>
                : <Router>
                    <NotRegisterUser path='/favs' />
                    <NotRegisterUser path='/user' />
                  </Router>
          }
      </Context.Consumer>
      <Navbar />
    </>
  )
}

export default App
