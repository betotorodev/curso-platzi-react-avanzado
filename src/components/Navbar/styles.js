import styled from 'styled-components';
import { Link as LinkRouter } from '@reach/router'


export const Nav = styled.nav`
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  font-size: 32px;
  border-top: 1px solid #e0e0e0;
  background: #fcfcfc;
`

export const Link = styled(LinkRouter)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  text-decoration: none;
  color: #888;
`