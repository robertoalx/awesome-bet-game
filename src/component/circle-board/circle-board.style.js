import styled from 'styled-components'

export const StyledCircleBoard = styled.div`
  background-color: #94632c;
  border-radius: 50%;
  width: ${({ side }) => `${side }px`};
  height: ${({ side }) => `${side }px`};
`