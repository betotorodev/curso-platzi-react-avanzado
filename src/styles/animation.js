import { keyframes, css } from 'styled-components'

const fadeInKeyFrames = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }

  to {
    filter: blur(0);
    opacity: 1;
  }
`
const fadeOutKeyFrames = keyframes`
  from {
    filter: blur(0);
    opacity: 1;
  }

  to {
    filter: blur(5px);
    opacity: 0;
  }
`
const rotate = keyframes`
  0% {
      transform: rotate(0deg);
      border-top-color: #2A8DF7;
  }
  25% {
      border-top-color: #7A53EB;
  }
  50% {
      border-top-color: #A447D3;
  }
  75% {
      border-top-color: #EC7BB3;
  }
  100% {
      transform: rotate(360deg);
      border-top-color: #2A8DF7;
  }
`


export const fadeIn = ({ time = '1s', type = 'ease' } = {}) =>
  css`animation: ${time} ${fadeInKeyFrames} ${type};`

export const fadeOut = ({ time = '1s', type = 'ease' } = {}) =>
  css`animation: ${time} ${fadeOutKeyFrames} ${type} forwards;`

export const loading =({ time = '1.2s' } = {}) =>
  css`animation: ${rotate} ${time} linear infinite;`