import React from 'react'
import { Link } from '@reach/router'

//components
import { FavButton } from '../FavButton/index'
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation'

//utils
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'

//css
import { Article, ImgWrapper, Img } from './styles'

const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1520561805070-83c413349512?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const key = `like-${id}`
  const [ liked, setLiked ] = useLocalStorage(key, false)
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
                  !liked && toggleLike({ 
                    variables: { 
                      input: { id }
                    }
                  })
                  setLiked(!liked)
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

