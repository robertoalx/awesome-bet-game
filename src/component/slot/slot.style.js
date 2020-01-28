import styled from 'styled-components'

export const StyleSlot = styled.div`
  height: 175px;
  position: relative;
  // background-color: red;
  display: inline-block;
  margin-left: 165px;
  transform-origin: 50% 100%;
  transform: rotate(90deg);

  &::before{
    content: '';
    position: absolute;
    top: 0;
    border-top: 175px solid red;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
  }

  &::after{
    content: ${({ number }) => `'${number}'`};
    position: relative;
    text-align: center;
  }
`