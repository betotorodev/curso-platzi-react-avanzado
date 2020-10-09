import React from 'react'
import { Query } from 'react-apollo'

import { GET_PHOTOS } from '../querys/GET_PHOTOS'
import { ListOfPhotoCardComponent } from '../components/ListOfPhotoCard/index'

export const ListOfPhotoCards = ({ id }) => {

  return (
    <Query query={GET_PHOTOS} variables={{id}}>
      {
        ({data = {}}) => {
          return <ListOfPhotoCardComponent {...data}/>
        }
      }
    </Query>
  )
}
