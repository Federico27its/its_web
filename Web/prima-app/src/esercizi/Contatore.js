import React, { useState } from 'react'

const Contatore = () => {
  const [c, setCount] = useState(0)

  const increment=()=>{
    
    setCount(c+1)

    }

    const decrement=()=>{
    
    setCount(c-1)

    }
  return (

    <div>
        <button onClick={increment} className='btn btn-primary'>+</button>
        <div>{c}</div>
        <button onClick={decrement} className='btn btn-primary'>-</button>
    </div>
  )
}

export default Contatore