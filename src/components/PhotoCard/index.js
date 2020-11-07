import React from 'react'
import { Link } from '@reach/router'

//components
import { FavButton } from '../FavButton/index'
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation'

//utils
import { useNearScreen } from '../../hooks/useNearScreen'

//css
import { Article, ImgWrapper, Img } from './styles'

const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1520561805070-83c413349512?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const [ show, element ] = useNearScreen()

  return (
    <Article ref={element}>
      {
        show &&
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img loading="lazy" src={src} alt="pets photo"/>
            </ImgWrapper>
          </Link>
          <ToggleLikeMutation>
            {
              (toggleLike) => {
                const handleFavClick = () => {
                  toggleLike({ 
                    variables: { 
                      input: { id }
                    }
                  })
                }
                return <FavButton liked={liked} likes={likes} onClick={handleFavClick}/>
              }
            }
          </ToggleLikeMutation>
        </>
      }
    </Article>
  )
}

