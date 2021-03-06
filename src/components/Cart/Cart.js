import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { BsTrashFill } from 'react-icons/bs'
import { Link } from "react-router-dom"

export const Cart = () => {

    const { cart, totalCart, vaciarCart, eliminarItem} = useContext(CartContext)
    return (
        <div className="container my-4">
            <h2>Tu compra</h2>
            <hr/>
            {
                cart.map((item) => (
                    <div key={item.id}>
                        <h4>{item.nombre}</h4>
                        <p>Cantidad: {item.cantidad}</p>
                        <p>Precio: {item.cantidad * item.precio}</p>
                        <button className="btn btn-danger" onClick={() => eliminarItem(item.id)}>
                            <BsTrashFill/>
                        </button>
                    </div>
                ))
            }
            <hr/>
            <h2>Total: ${totalCart()}</h2>
            <div className="my-2">
                <button className="btn btn-danger" onClick={vaciarCart}>Vaciar el carrito</button>
                <Link to="/checkout" toclassName="btn btn-succes mx-2">Terminar mi compra</Link>
            </div>
        </div>
    )
}