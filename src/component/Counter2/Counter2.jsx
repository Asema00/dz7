import React from 'react'
import useCount from '../../hooks/useCount'
import Button from '../UI/Button/Button'

const Counter2 = () => {
  const {count,minus,plus}= useCount(10)
  return (
    <>
      <h2>{count}</h2>
      <Button onClick={plus}>plus</Button>
      <Button onClick={minus}>minus</Button>
    </>
  )
}

export default Counter2