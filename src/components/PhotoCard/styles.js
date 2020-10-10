import styled from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const Article = styled.article`
  min-height: 200px;
`

export const ImgWrapper = styled.div`
  position: relative;
  display: block;
  height: 0;
  padding: 56.25% 0 0 0;
  border-radius: 10px;
  overflow: hidden;
`

export const Img = styled.img`
  ${fadeIn()}
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
  object-fit: cover;
`