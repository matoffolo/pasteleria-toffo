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
  <Card.Img variant="top" src={producto.imagen} alt={producto.nombre} height='250 px'/>
  <Card.Body className="d-flex flex-column">
    <Card.Title className='flex-grow-1 text-center'>{producto.nombre}</Card.Title>
    <Card.Text className="mt-auto text-center">
     <h4>$ {producto.precio}</h4>
    </Card.Text>
    <Button variant="outline-dark">Detalle</Button>
  </Card.Body>
</Card>
    </>
  );
}

export default Item;
