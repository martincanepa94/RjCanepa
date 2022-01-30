import { Button } from "react-bootstrap"
import './Boton.scss'

export const Boton = ( {children, click} ) => {

    return (
        <Button variant="success" size="lg" onClick={click}>{children}</Button>
    )
}