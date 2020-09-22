import React from 'react'
import { ListOfCategories } from './components/ListOfCategories/index'

import { GlobalStyle } from './components/GlobalStyles'
import { ListOfPhotoCard } from './components/ListOfPhotoCard/index'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ListOfCategories />
      <ListOfPhotoCard />
    </>
  )
}

export default App
