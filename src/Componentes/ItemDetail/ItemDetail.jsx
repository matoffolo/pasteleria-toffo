import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../CartContext/CartContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

const ItemDetail = ({ producto }) => {
  const { addToCart } = useContext(CartContext);
  const [number, setNumber] = useState(0);

  const addCart = (cantidad) => {
    setNumber(cantidad);
    addToCart({ ...producto, cantidad });
  };

  return (
    <>
      <div className="lg:w-4/5 mx-auto flex flex-wrap">
        <img
          alt="ecommerce"
          className="lg:w-2/5 w-100 object-cover object-center rounded border border-gray-200"
          src={producto.imagen}
        />
        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h2 className="text-sm title-font text-gray-500 tracking-widest">
            PASTELERIA TOFFO
          </h2>
          <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
            {producto.nombre}
          </h1>
          <hr />
          <p className="leading-relaxed">{producto.descripcion}</p>
          <hr />
          <div className="d-flex justify-content-around">
            <span className="title-font font-medium text-2xl text-gray-900 ">
              ${producto.precio}
            </span>

            <span className="title-font font-medium text-2xl text-gray-900 ">
              {number === 0 ? (
                <ItemCount
                  initial={1}
                  stock={producto.stock}
                  addCart={addCart}
                />
              ) : (
                <div>
                  <Link to="/shoppingcart">
                    <Button variant="outline-dark ms-2">Ir al Carrito</Button>
                  </Link>
                </div>
              )}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
