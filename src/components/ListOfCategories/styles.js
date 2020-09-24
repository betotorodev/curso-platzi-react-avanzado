import styled, { css } from 'styled-components'
import { fadeIn, fadeOut, loading } from '../../styles/animation'

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  ${props => props.fixed && css`
  ${props => props.fade ? fadeIn({time: '150ms'}) : fadeOut({time: '150ms'})}
    position: fixed;
    top: -20px;
    left: 0;
    right: 0;
    z-index: 1;
    max-width: 400px;
    margin: 0 auto;
    padding: 5px;
    border-radius: 60px;
    background-color: white;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    transform: scale(.5);
  `}
  &::-webkit-scrollbar {
    display: none;
  }
`

export const Item = styled.li`
  padding: 0 8px;
`
export const Loading = styled.div`
    display: inline-block;
    border: 4px solid hsl(222, 100%, 95%);;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    ${loading()}
`



