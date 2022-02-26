
import { ItemCount } from "../ItemCount/ItemCount"
import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

export const ItemDetail = ( { id, nombre, img, desc, stock, precio, categoria } ) => {
    
    const [cantidad, setCantidad] = useState(0)

    const { cart, agregarAlCarrito, isInCart } = useContext(CartContext)

    console.log(cart)

    const handleAgregar = () => {
        if (cantidad === 0) return
        // con el return ahi no se ejecuta lo que sigue en la funcion.

        if (!isInCart(id)) {
            const addItem = {
                id, nombre, precio, stock, cantidad
            }
    
            agregarAlCarrito(addItem)
        }
    }

    return (
        <div>
            <h3>{nombre}</h3>
            <img src={img} alt={nombre}/>
            <p>{desc}</p>
            <h5>Precio $: {precio}</h5>
            
            {
                isInCart(id)
                ? 
                <Link to="/cart" className="btn btn-succes my-3">
                    Terminar mi compra
                </Link>
                :
                

                <>
            <ItemCount 
            max={stock} 
            counter={cantidad} 
            setCounter={setCantidad} 
            />


            <button
                className="btn btn-success my-2"
                onClick={handleAgregar}
                disabled={cantidad === 0}
            
            >
                Agregar al carrito
                </button>

            </>
                
            }

            
        

        </div>
    )
}