import styled from 'styled-components'

export const Form = styled.form`
  padding: 16px 0;
`

export const Input = styled.input`
  display: block;
  width: 100%;
  margin-bottom: 8px;
  padding: 8px 4px;
  border-radius: 3px;
  border: 1px solid #ccc;
  &[disabled] {
    opacity: 0.3;
  }
`

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
export const Title = styled.h2`
  font-size: 24px;
  font-weight: 500;
  padding: 8px 0;
`

export const Error = styled.span`
  font-size: 14px;
  color: red;
`