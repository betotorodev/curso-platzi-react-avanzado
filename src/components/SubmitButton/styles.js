import styled from 'styled-components'

export const Button = styled.button`
  display: block;
  width: 100%;
  height: 32px;
  border-radius: 3px;
  text-align: center;
  color: #fff;
  background: #8d00ff;
  &[disabled] {
    opacity: 0.3;
  }
`