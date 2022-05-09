import React from "react";
import {
  Card,
  Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


function Item({ producto }) {
  return (
    <>
  <Card style={{ width: '20rem'}} className='mb-3'>
  <Card.Img variant="top" src={producto.img} alt={producto.name} height='250 px'/>
  <Card.Body className="d-flex flex-column">
    <Card.Title className='flex-grow-1 text-center'>{producto.name}</Card.Title>
    <Card.Text className="mt-auto text-center">
    $ {producto.price}
    </Card.Text>
    <Button variant="outline-dark">Detalle</Button>
  </Card.Body>
</Card>
    </>
  );
}

export default Item;
