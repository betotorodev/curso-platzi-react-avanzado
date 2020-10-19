import React from 'react'
import { Router } from '@reach/router'

//components
import { Home } from './pages/Home.js'
import { Detail } from './pages/Detail'
import { Navbar } from './components/Navbar'

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
      <Navbar />
    </>
  )
}

export default App
