import React, { useEffect, useRef, useState } from 'react'
import { MdFavoriteBorder } from "react-icons/md";
import { Article, ImgWrapper, Button, Img } from './styles'

const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1520561805070-83c413349512?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const element = useRef(null)
  const [ show, setShow ] = useState(false)
  
  useEffect(() => {
    const observer = new window.IntersectionObserver((entries) => {
      const { isIntersecting } = entries[0]
      if(isIntersecting) {
        console.log('si')
        setShow(true)
        observer.disconnect()
      }
    })

    observer.observe(element.current)

  }, [element])

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
          <Button>
            <MdFavoriteBorder size='18px' /> {likes} likes!
          </Button>
        </>
      }
    </Article>
  )
}

