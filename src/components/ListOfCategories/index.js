import React, { useState, useEffect } from 'react'
import { Category } from '../Category/index'

import { List, Item } from './styles'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])
  
  useEffect(() => {
    fetch('https://petgram-backend.betotorodev.vercel.app/categories')
      .then((response) => response.json())
      .then(data => setCategories(data))
  }, [])
  
  return (
    <List>
      {
        categories.map(category =>
          <Item key={category.id}><Category {...category}/></Item>
        )
      }
    </List>
  )
}
