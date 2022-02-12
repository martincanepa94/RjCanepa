import { useEffect, useState } from "react"

export const ItemCount = ({max, min = 0, counter, setCounter}) => {

    const handleSumar = () => {
  
        counter < max && setCounter(counter+1)
    }

   const handleRestar = () => {
       counter > min && setCounter(counter-1)
       // Esto es un ternario de dos partes. si pasa tal cosa, entonces esto. mas nada.
   }

    

    return (
        <div >
            <button className="btn btn-outline-primary" onClick={handleRestar}>-</button>
            <span className="mx-3">{counter}</span>
            <button className="btn btn-outline-primary" onClick={handleSumar}> +</button>
        </div>


    )
}