import styled from 'styled-components'

export const StyleSlot = styled.div`
  height: 175px;
  position: absolute;
  // background-color: red;
  display: inline-block;
  margin-left: 167px;
  transform-origin: 50% 100%;
  transform: rotate(${({ rotate }) => rotate}deg);
  color: white;

  &::before{
    content: '';
    position: absolute;
    top: 0;
    border-top: 175px solid ${({ color }) => color};
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
  }

  &::after{
    content: ${({ number }) => `'${number}'`};
    position: relative;
    text-align: center;
  }
`