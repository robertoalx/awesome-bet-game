import React from 'react'
import { StyledCircleBoard } from './circle-board.style'
import Slot from '../slot'

const CircleBoard = () => {
  return (
    <StyledCircleBoard side={350}>
      <Slot />
    </StyledCircleBoard>
  )
}

export default CircleBoard