import "./NavBar.css"
import { CartWidget } from "../CartWidget/CartWidget"
import { Card, Button, Navbar, Nav, Container } from "react-bootstrap"

export const NavBar = () => {

    return (
        <>
  <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Bienvenidos a Viñedos Malvin!</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Inicio</Nav.Link>
      <Nav.Link href="#features">Productos</Nav.Link>
      <Nav.Link href="#pricing">Viñedos y Bodega</Nav.Link>
      
    </Nav>
    <CartWidget/>
    </Container>
  </Navbar>
 

        
        </>
        
               
            

        
    )
}