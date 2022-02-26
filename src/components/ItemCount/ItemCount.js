import { useEffect, useState } from "react"
import { configBtns } from "./configBtns"

export const ItemCount = ({max, min = 0, counter, setCounter}) => {
    
    const handleSumar = () => {
  
        counter < max && setCounter(counter+1)
    }

   const handleRestar = () => {
       counter > min && setCounter(counter-1)
       // Esto es un ternario de dos partes. si pasa tal cosa, entonces esto. mas nada.
   }

   const {configRestar, configSumar} = configBtns(counter, max, min, handleRestar, handleSumar)

    return (
        <div >
            <button {...configRestar}>
                -
            </button>
            <span className="mx-3">{counter}</span>
            <button {...configSumar}> 
                +
            </button>
        </div>


    )
}