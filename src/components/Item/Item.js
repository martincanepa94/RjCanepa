import { Card, Button } from "react-bootstrap"
import { Link } from 'react-router-dom'
import { ItemCount } from "../ItemCount/ItemCount"

export const Item = ( {id, nombre, precio, img, desc, oferta} ) => {

  const precioFinal = oferta ? precio * 0.75 : precio

    return(
        <>
<Card style={{ width: '16rem' }}>
  <Card.Img variant="top" src={img}/>
  <Card.Body>
    <Card.Title>{nombre}</Card.Title>
    <Card.Text>
      Descripcion: {desc}
    </Card.Text>
    { oferta &&
    <Card.Title>25% OFF</Card.Title>
    }
    
        Precio: $ {precioFinal}<hr />
    <Link to={`/detail/${id}`}>
    </Link>
    <Button variant="warning" as={Link} to={`/detail/${id}`}>Ver mas</Button>
  </Card.Body>
</Card>


        </>
    )
}
