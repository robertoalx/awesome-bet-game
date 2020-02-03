import React from 'react'
import { StyleSlot } from './slot.style'

const Slot = ({ number, rotate, color }) => {
  return (
    <StyleSlot 
      number={number} 
      rotate={rotate}
      color={color}
    />
  )
}

export default Slot
