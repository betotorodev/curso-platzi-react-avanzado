import React from 'react'
import { ListOfCategories } from './components/ListOfCategories/index'

import { GlobalStyle } from './styles/GlobalStyles'
import { ListOfPhotoCards }from './container/ListOfPhotoCards'

import { Logo } from './components/Logo/index'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Logo />
      <ListOfCategories />
      <ListOfPhotoCards categoryId={2}/>
    </>
  )
}

export default App
