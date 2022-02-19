import { useContext } from 'react'
import { BsFillCartFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import '../CartWidget/CartWidget.scss'
import { CartContext } from '../../context/CartContext'


export const CartWidget = () => {

        const { cantidadCart } = useContext(CartContext)

    return (
                    <Link to="/cart" className='cart-widget'>
                    <BsFillCartFill/>
                    <span>{cantidadCart()}</span>
                    </Link>
            )
    }