import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'

export const withPhotos = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`