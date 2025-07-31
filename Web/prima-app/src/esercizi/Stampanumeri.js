import React from 'react'

const Stampanumeri = () => {
    const l = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div>{l.map((i) =>{return <p>{i}</p>})}</div>
  )
}

export default Stampanumeri