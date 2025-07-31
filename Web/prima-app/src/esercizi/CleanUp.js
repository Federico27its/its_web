import React, {useEffect, useState} from 'react'

const CleanUp = () => {

    const[size, setSize]=useState(window.innerWidth);
    const dimensione = () => {
        setSize(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener("resize", dimensione);
        return()=>{
            window.removeEventListener("resize", dimensione)
        }
    })
  return (
    <h1>dimensione: {size}</h1>
  )
}

export default CleanUp