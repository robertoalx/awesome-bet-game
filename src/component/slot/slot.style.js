import styled from 'styled-components'

export const StyledSlot = styled.div`
  height: 175px;
  width: 30px;
  position: absolute;
  display: inline-block;
  margin-left: 160px;
  transform-origin: 50% 100%;
  transform: rotate(${({ rotate }) => rotate}deg);
  color: white;
  text-align: center;
  
  
  &::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    border-top: 175px solid ${({ color }) => color};
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-radius: 5px;
  }

  &::after{
    content: ${({ number }) => `'${number}'`};
    position: relative;
  }
`