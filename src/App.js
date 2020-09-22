import React from 'react'
import { ListOfCategories } from './components/ListOfCategories/index'

import { GlobalStyle } from './styles/GlobalStyles'
import { ListOfPhotoCard } from './components/ListOfPhotoCard/index'

import { Logo } from './components/Logo/index'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Logo />
      <ListOfCategories />
      <ListOfPhotoCard />
    </>
  )
}

export default App
