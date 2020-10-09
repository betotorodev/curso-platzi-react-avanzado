import React from 'react'
import { ListOfCategories } from './components/ListOfCategories/index'

import { GlobalStyle } from './styles/GlobalStyles'
import { ListOfPhotoCards }from './container/ListOfPhotoCards'
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'

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
          : <>
              <ListOfCategories />
              <ListOfPhotoCards id={2}/>
            </>
      }
    </>
  )
}

export default App
