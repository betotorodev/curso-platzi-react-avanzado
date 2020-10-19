import React, { useState, useEffect } from 'react'
import { Category } from '../Category/index'

import { List, Item, Loading } from './styles'

const useCategoriesData = () => {
  const [categories, setCategories] = useState([])
  const [ loading, setLoading ] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://petgram-backend.betotorodev.vercel.app/categories')
      .then((response) => response.json())
      .then(data => {
        setCategories(data) 
        setLoading(false)
      })
}, [])

  return { categories, loading }
}

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)


  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])
  
  const renderList = (fixed) => (
    <List fade={showFixed} fixed={fixed}>
      {
        loading
          ? <Loading></Loading>
          : categories.map(category =>
            <Item key={category.id}>
              <Category {...category} path={`/pet/${category.id}`}/>
            </Item>
        )
      }
    </List>
  )

  return (
    <>
      {renderList()}
      {renderList(true)}
    </>
  )
}
