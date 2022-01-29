import "./NavBar.css"
import { CartWidget } from "../CartWidget/CartWidget"

export const NavBar = () => {

    return (
        <header className="header">
            <h1>LOGO</h1>

            <nav className="header-nav">
                <p className="header-link">Vino Blanco</p>
                <p className="header-link">Vino Rosado</p>   
                <p className="header-link">Tinto</p>
                <p> <CartWidget/> </p>

            </nav>

        </header>
    )
}