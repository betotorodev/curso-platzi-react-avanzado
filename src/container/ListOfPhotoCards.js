import React from 'react'
import { Query } from 'react-apollo'

import { withPhotos } from '../hoc/withPhotos'
import { ListOfPhotoCardComponent } from '../components/ListOfPhotoCard/index'

export const ListOfPhotoCards = ({ id }) => {

  return (
    <Query query={withPhotos} variables={{id}}>
      {
        ({data = {}}) => {
          return <ListOfPhotoCardComponent {...data}/>
        }
      }
    </Query>
  )
}

