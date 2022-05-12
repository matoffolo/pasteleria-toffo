import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../CartContext/CartContext";

const ShoppingCart = () => {
  const { cart, removeFromCart, clear, totalItem, precioTotal } =
    useContext(CartContext);

  if (totalItem === 0) {
    return (
      <>
      <div className="text-center">
        <h1 className="text-lg title-font text-gray-700 tracking-widest">
            NO TIENES NADA DULCE EN TU CARRITO
          </h1>
        <Link to="/">
          <button className="btn btn-outline-dark position-relative">Ir a Productos</button>
        </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="container mx-auto mt-10">
        <div className="flex shadow-md my-10">
          <div className="w-3/4 bg-white px-10 py-10  ">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">TU DULCE CARRITO</h1>
              <h2 className="font-semibold text-2xl">{totalItem} Productos</h2>
            </div>
            <div className="flex mt-5 mb-2">
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                Detalles de Productos
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                Cantidad
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                Precio
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                Total
              </h3>
            </div>
            {cart.length > 0 &&
              cart.map((product) => (
                <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-4">
                  <div className="flex w-2/5">
                    <div className="w-20">
                      <img className="w-20 rounded-md" src={product.imagen} alt={product.nombre} />
                    </div>
                    <div className="flex flex-col justify-between ml-4 flex-grow">
                      <span className="text-sm">{product.nombre}</span>
                      <button
                        onClick={() => removeFromCart(product.id)}
                        className="btn btn-outline-dark position-relative py-1 mt-2"
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                  <span className="text-center w-1/5 font-semibold  text-sm">
                  {product.cantidad}
                  </span>
                  <span className="text-center w-1/5 font-semibold  text-sm">
                    ${product.precio}
                  </span>
                  <span className="text-center w-1/5 font-semibold  text-sm">
                    $
                    {(
                      parseFloat(product.precio) * parseFloat(product.cantidad)
                    ).toFixed(2)}
                  </span>
                </div>
              ))}
            <Link
              to="/"
              className="flex btn btn-outline-dark py-1 mt-4 mt-10"
            > <span aria-hidden="true">&larr;</span>Continuar Comprando
            </Link>
            <br></br>
            <Link
              to="/"
              onClick={() => clear()}
              className="flex btn btn-outline-dark py-1 mt-4"
            ><span aria-hidden="true">&larr;</span> Borrar Carrito
            </Link>
          </div>

          <div id="summary" className="w-1/4 px-8 py-12">
            <h1 className="font-semibold text-2xl border-b pb-8">
              Orden
            </h1>
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>TOTAL</span>
                <span>${precioTotal}</span>
              </div>
              <Link to="/formBuy">
                <button className="btn btn-outline-dark position-relative ms-1 py-1  w-full">
                  COMPRAR
                </button>
              </Link>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
