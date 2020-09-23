import React, { useState, useEffect } from 'react'
import { Category } from '../Category/index'

import { List, Item } from './styles'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    fetch('https://petgram-backend.betotorodev.vercel.app/categories')
      .then((response) => response.json())
      .then(data => setCategories(data))
  }, [])

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])
  
  const renderList = (fixed) => (
    <List fixed={showFixed} className={fixed ? 'fixed' : ''}>
      {
        categories.map(category =>
          <Item key={category.id}><Category {...category}/></Item>
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
