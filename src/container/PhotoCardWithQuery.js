import React from 'react'
import { PhotoCard } from '../components/PhotoCard/index'
import { GET_SINGLE_PHOTO } from '../querys/GET_SINGLE_PHOTO'

import { Query } from 'react-apollo'

const renderProp = ({ loading, error, data = {} }) => {
  if(loading) return <h1>Loading...</h1>
  if(error) return <h1>Error</h1>
  const { photo = {}} = data
  return <PhotoCard {...photo}/>
}

export const PhotoCardWithQuery = ({ id }) => (
  <Query query={GET_SINGLE_PHOTO} variables={{id}}>
    {renderProp}
  </Query>
)
