import React from 'react'
import { StyledSlot } from './slot.style'

const Slot = ({ number, rotate, color }) => {
  return (
    <StyledSlot 
      number={number} 
      rotate={rotate}
      color={color}
    />
  )
}

export default Slot
