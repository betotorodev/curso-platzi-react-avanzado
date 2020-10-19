import React from 'react'
import { Query } from 'react-apollo'

import { GET_PHOTOS } from '../querys/GET_PHOTOS'
import { ListOfPhotoCardComponent } from '../components/ListOfPhotoCard/index'

export const ListOfPhotoCards = ({ categoryId }) => {

  return (
    <Query query={GET_PHOTOS} variables={{categoryId}}>
      {
        ({data = {}}) => {
          return <ListOfPhotoCardComponent {...data}/>
        }
      }
    </Query>
  )
}
