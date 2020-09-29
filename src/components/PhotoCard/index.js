import React from 'react'
import { MdFavoriteBorder } from "react-icons/md";
import { Article, ImgWrapper, Button, Img, LikeIcon } from './styles'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'

const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1520561805070-83c413349512?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const key = `like-${id}`
  const [ liked, setLiked ] = useLocalStorage(key, false)
  const [ show, element ] = useNearScreen()

  const Icon = liked ? LikeIcon : MdFavoriteBorder

  return (
    <Article ref={element}>
      {
        show &&
        <>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img loading="lazy" src={src} alt="pets photo"/>
            </ImgWrapper>
          </a>
          <Button onClick={() => setLiked(!liked)}>
            <Icon size='18px' /> {likes} likes!
          </Button>
        </>
      }
    </Article>
  )
}

