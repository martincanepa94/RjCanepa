import { Card, Button } from "react-bootstrap"

export const Item = ( {nombre, precio, img, desc} ) => {

    return(
        <>
<Card style={{ width: '16rem' }}>
  <Card.Img variant="top" src={img}/>
  <Card.Body>
    <Card.Title>{nombre}</Card.Title>
    <Card.Text>
      Descripcion: {desc}
    </Card.Text>
        Precio: $ {precio}<hr />
    <Button variant="warning">Comprar</Button>
  </Card.Body>
</Card>
        </>
    )
}