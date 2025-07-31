import React from 'react'

const Componente1 = (props) => {
    const anni=29;
  return (
 
    <div style = {{ color:"red", fontWeight: "900", margin:"10px", border:"5px #000 solid", padding:"20px"}}>Componente1 {props.children} di anni {anni}
    <Anagrafica></Anagrafica>
    <Messaggio></Messaggio>
    </div>
  )
}

const Anagrafica=()=>{
    return (
        <div>Anagrafica</div>
    )
}

const Messaggio=()=>{
    return (
        <di>Messaggio</di>
    )
}

export default Componente1