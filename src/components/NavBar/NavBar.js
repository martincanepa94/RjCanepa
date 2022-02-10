import "./NavBar.css"
import {Link} from 'react-router-dom'
import { CartWidget } from "../CartWidget/CartWidget"
import { Card, Button, Navbar, Nav, Container } from "react-bootstrap"

export const NavBar = () => {

    return (
        <>
  <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand as={Link} to="/"><h1>HOME LOGO</h1></Navbar.Brand>

    <Nav className="me-auto">
      <Nav.Link as={Link} to='/productos/estandar'>Productos Estandar</Nav.Link>
      <Nav.Link as={Link} to='/productos/vip'>Productos VIP</Nav.Link>
      <Nav.Link as={Link} to='/contacto'>Contacto</Nav.Link>
      <Nav.Link as={Link} to='/nosotros'>Nosotros</Nav.Link>
      
    </Nav>
    <CartWidget/>
    </Container>
  </Navbar>
      
        </>    
    )
}