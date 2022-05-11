import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

const ItemCount = ({ initial, stock, addCart }) => {
  const [counter, setCounter] = useState(initial);

  const add = () => {
    counter < stock && setCounter(counter + 1);
  };

  const substract = () => {
    counter > initial && setCounter(counter - 1);
  };

  return (
    <div>
      <p className="flex-grow-1 text-center ">{counter}</p>
      <Button onClick={substract} variant="outline-dark ms-2">
        -
      </Button>
      <Button onClick={add} variant="outline-dark ms-2">
        +
      </Button>
      <Button onClick={() => addCart(counter)} variant="outline-dark ms-2">
        Agregar al Carrito
      </Button>
    </div>
  );
};

export default ItemCount;
