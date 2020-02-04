import React from 'react'
import { StyledCircleBoard } from './circle-board.style'
import Slot from '../slot'
import SmartBall from '../smartball'

const CircleBoard = () => {
  const length = 18
  const numberList = [
    {
      number: '0',
      rotate: 0,
      color: 'green'
    },
    ...Array.from({ length }, (_, key) => key + 1).map (n => ({
      number: n + '',
      rotate: ~~(360 / 38 * n * 100) / 100,
      color: n % 2 ? 'black' : 'red',
    })),
    {
      number: '00',
      rotate: 180,
      color: 'green'
    },
    ...Array.from({ length }, (_, key) => key + 19).map (n => ({
      number: n + '',
      rotate: ~~(360 / 38 * (n + 1) * 100) / 100,
      color: n % 2 ? 'red' : 'black',
    }))
  ]
  console.log(numberList)
  return (
    <StyledCircleBoard side={350}>
      {numberList.map(slot => <Slot {...slot}/>)}
      <SmartBall />
    </StyledCircleBoard>
  )
}

export default CircleBoard