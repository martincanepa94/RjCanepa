import { Card, Button } from "react-bootstrap"

export const Item = ( {nombre, precio, img, desc} ) => {

    return(
        <>
<Card style={{ width: '16rem' }}>
  <Card.Img variant="top" src={img}/>
  <Card.Body>
    <Card.Title>{nombre}</Card.Title>
    <Card.Text>
      {desc}
    </Card.Text>
        Precio: $ {precio}
    <Button variant="warning">Comprar</Button>
  </Card.Body>
</Card>
        </>
    )
}