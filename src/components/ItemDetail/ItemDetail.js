
import { ItemCount } from "../ItemCount/ItemCount"
import { useEffect, useState } from "react"

export const ItemDetail = ( { id, nombre, img, desc, stock, precio, categoria } ) => {

    const [cantidad, setCantidad] = useState(0)

    const handleAgregar = () => {
        if (cantidad === 0) return
        // con el return ahi no se ejecuta lo que sigue en la funcion.


        const addItem = {
            id, nombre, precio, stock, cantidad
        }

        console.log(addItem)
    }

    return (
        <div>
            <h3>{nombre}</h3>
            <img src={img} alt={nombre}/>
            <p>{desc}</p>
            <h5>Precio $: {precio}</h5>
            
            <ItemCount 
            max={stock} 
            counter={cantidad} 
            setCounter={setCantidad} 
            />


            <button
                className="btn btn-success my-2"
                onClick={handleAgregar}
            
            >
                Agregar al carrito
                </button>
        

        </div>
    )
}