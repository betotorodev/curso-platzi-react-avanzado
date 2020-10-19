import React from 'react'
import { Router } from '@reach/router'

import { Home } from './pages/Home.js'
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'

import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo/index'

const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')

  return (
    <>
      <GlobalStyle />
      <Logo />
      {
        detailId
          ? <PhotoCardWithQuery id={detailId}/>
          : <Router>
              <Home path='/' />
              <Home path='/pet/:id' />
            </Router>
      }
    </>
  )
}

export default App
