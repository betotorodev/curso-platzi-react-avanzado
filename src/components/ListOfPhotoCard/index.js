import React from 'react'

import { PhotoCard } from '../PhotoCard/index'

export const ListOfPhotoCardComponent = ({ data: { photos = [] } }) => {
  return (
    <ul>
      {
        photos.map(photo => 
        <PhotoCard key={photo.id} {...photo}/>
        )
      }
    </ul>
  )
}

