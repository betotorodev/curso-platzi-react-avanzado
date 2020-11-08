import React from 'react'
import { Query } from 'react-apollo'
import { GET_FAVS } from '../querys/GET_FAVS'
import { ListOfFavs } from '../components/ListOFavs/index'

const renderProp = ({ loading, error, data }) => {
  if (loading) return <p>Loading...</p>
  if (error) return <p>error</p>
  const { favs } = data

  return <ListOfFavs favs={favs} />
}

export const FavsWithQuery = () => {
  return (
    <Query query={GET_FAVS} fetchPolicy='network-only'>
      {renderProp}
    </Query>
  )
}

