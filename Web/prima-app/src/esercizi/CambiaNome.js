import React from 'react'
import { useState } from 'react';

const CambiaNome = () => {
        const [nome1, setNome1] = useState("Roberto");
        const cambia = () => {
          if (nome1 === "Roberto"){
            setNome1("Mario");
          } else {
            
            setNome1("Roberto");
          }
        
      };
  return (
    <div>
        <h3>{nome1}</h3>
        <button onClick={cambia} className='btn btn-primary'>
          cambia nome
        </button>
    </div>
  )
}

export default CambiaNome