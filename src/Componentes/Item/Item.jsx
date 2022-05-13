import React from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Item({ producto }) {
  return (
    <>
      <Card style={{ width: "20rem" }} className="mb-3">
        <Card.Img
          variant="top"
          src={producto.imagen}
          alt={producto.nombre}
          height="250 px"
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="flex-grow-1 text-center">
            {producto.nombre}
          </Card.Title>
          <Card.Text className="mt-auto text-center h5">
            $ {producto.precio}
          </Card.Text>
          <Link to={`/Item/${producto.id}`} className="text-center">
            <Button variant="outline-dark">Detalle</Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
}

export default Item;
