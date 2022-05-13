/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useContext } from "react";
import { CartContext } from "../../CartContext/CartContext";
import {
  addDoc,
  collection,
  getFirestore,
  serverTimestamp,
} from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

function formBuy() {
  const { cart, totalItem, precioTotal, clear } = useContext(CartContext);

  const [buyer, setBuyer] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    direccion: "",
  });

  const [codigo, setCodigo] = useState("");
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value.toString(),
    });
  };

  const order = {
    ...buyer,
    item: cart,
    total: totalItem,
    precio: precioTotal,
    time: serverTimestamp(),
  };

  const terminarVenta = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order).then(({ id }) => {
      setCodigo(id);
      navigate("/order/" + id);
      clear();
    });
  };

  return (
    <>
      {cart.length > 0 ? (
        <div className="bg-white pt-10">
          <div className="max-w-2xl mx-auto pt-6 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Checkout</h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                terminarVenta();
                e.target.reset();
              }}
              className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16"
            >
              <div>
                <div>
                  <h2 className="text-lg font-medium text-gray-900">
                    Informacion de Contacto
                  </h2>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Nombre
                    </label>
                    <div className="mt-1">
                      <input
                        name="nombre"
                        type="text"
                        required
                        pattern="^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%*(){}|~<>;:[\]]{2,}$"
                        onChange={handleOnChange}
                        className="block w-full border-1 py-1.5 pl-2  rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Apellido
                    </label>
                    <div className="mt-1">
                      <input
                        name="apellido"
                        type="text"
                        required
                        pattern="^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%*(){}|~<>;:[\]]{2,}$"
                        onChange={handleOnChange}
                        className="block w-full border-2 py-1.5 pl-2 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700">
                      E-mail
                    </label>
                    <div className="mt-1">
                      <input
                        name="email"
                        type="text"
                        onChange={handleOnChange}
                        required
                        title="nombre@ejemplo.com"
                        pattern="^[a-zA-Z0-9.!#$%'+/=?^_`{|}~-]+@[a-zA-Z-]+(?:\.[a-zA-Z0-9-]+)$"
                        className="block w-full border-2 py-1.5 pl-2 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Telefono
                    </label>
                    <div className="mt-1">
                      <input
                        name="telefono"
                        type="tel"
                        required
                        minLength={10}
                        pattern="^([0-9]{6,20})"
                        title="(10 digitos)"
                        onChange={handleOnChange}
                        className="block w-full border-2 py-1.5 pl-2 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Direccion
                    </label>
                    <div className="mt-1">
                      <input
                        name="direccion"
                        type="text"
                        required
                        maxLength={200}
                        onChange={handleOnChange}
                        className="block w-full border-2 py-1.5 pl-2 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 lg:mt-0">
                <h2 className="text-lg font-medium text-gray-900">TU PEDIDO</h2>

                <div className="mt-4 bg-white border rounded-lg shadow-sm">
                  <ul>
                    {cart.map((item) => (
                      <li key={item.id} className="flex py-6 px-4 sm:px-6">
                        <div className="flex-shrink-0">
                          <img
                            src={item.imagen}
                            alt={item.nombre}
                            className="w-20 rounded-md"
                          />
                        </div>

                        <div className="ml-6 flex-1 flex flex-col">
                          <div className="flex">
                            <div className="min-w-0 flex-1">
                              <h4 className="text-sm">
                                <Link
                                  to={`/item/${item.id}`}
                                  className="font-semibold font- poppins text-gray-700 hover:text-gray-800"
                                >
                                  {item.nombre}
                                </Link>
                              </h4>
                              <p className="mt-1 text-sm text-gray-500">
                                Categoria: {item.categoria}
                              </p>
                            </div>
                          </div>

                          <div className="flex-1 pt-2 flex items-end justify-between">
                            <div>
                              <label>Precio</label>
                              <p className="mt-1 text-center font-medium text-gray-900">
                                ${item.precio}
                              </p>
                            </div>
                            <div>
                              <label>Cantidad</label>
                              <p className="mt-1 text-center font-medium text-gray-900">
                                {item.cantidad}
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <dl className="border-t py-3 px-4 space-y-6 sm:px-6 font-poppins">
                    <div className="flex items-center justify-between">
                      <dt className="text-sm">Total</dt>
                      <dd className="text-sm font-medium text-gray-900">
                        $ {precioTotal}
                      </dd>
                    </div>
                  </dl>

                  <div className="border-t py-3 px-4 sm:px-6">
                    <button
                      type="submit"
                      className="btn btn-outline-dark position-relative ms-1 py-1  w-full"
                    >
                      Confirmar Orden
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-lg title-font text-gray-700 tracking-widest">
            NO TIENES NADA DULCE EN TU CARRITO
          </h1>
          <Link to="/">
            <button className="btn btn-outline-dark position-relative">
              Ir a Productos
            </button>
          </Link>
        </div>
      )}
    </>
  );
}

export default formBuy;
