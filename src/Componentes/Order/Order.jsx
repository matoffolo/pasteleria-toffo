/* eslint-disable no-undef */
import React from "react";
import { Link } from "react-router-dom";

const Order = ({ ticket, id }) => {
    let fecha = new Date(ticket.time.seconds*1000).toLocaleDateString('en-GB')

  return (
    <main className="bg-white relative lg:min-h-screen">
      <div>
        <div className="grid grid-cols-6 gap-4">
          <div className="col-start-2 col-span-4">
            <p className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 text-gold font-lora">
              Gracias por su Compra
            </p>
            <p className="mt-2 text-base text-gray-500 font-poppins">
              Su pedido se esta procesando. En breve recibira la confirmacion
            </p>

            <dl className="mt-4 text-sm font-medium">
              <dt className="text-gray-1000 underline">Numero de Orden:</dt>
              <dd className="mt-3 text-gold text-lg font-semibold">{id}</dd>
            </dl>
            <p className="mt-16 text-4xl font-extrabold tracking-tight text-gray-900 text-gold font-lora">
              Resumen de su Compra
            </p>
            <ul className="mt-6 text-sm font-medium text-gray-500 border-t border-gray-900 divide-y divide-gray-200">
              {ticket.item.map((product) => (
                <li key={product.id} className="flex py-6 space-x-6">
                  <img
                    src={product.imagen}
                    alt={product.nombre}
                    className="flex-none w-24 h-24 bg-gray-100 rounded-md object-center object-cover"
                  />
                  <div className="flex-auto space-y-1">
                    <h3 className="text-gray-900 fs-5 font-semibold">
                      {product.nombre}
                    </h3>
                    
                  </div>
                  <p className="flex-none font-semibold text-gray-900">
                    ${product.precio}
                  </p>
                </li>
              ))}
            </ul>

            <dl className="text-sm font-medium text-gray-900 space-y-6 border-t border-gray-900 pt-6">
              <div className="flex justify-between">
                <dt>TOTAL</dt>
                <dd className="text-gray-900">${ticket.precio}</dd>
              </div>
            </dl>

            <dl className="mt-16 grid grid-cols-2 gap-x- text-sm text-gray-600 border border-dark p-2">
              <div>
                <dt className="font-medium text-gray-900 underline">
                  Datos de Envio:
                </dt>
                <dd className="mt-2 ms-2">
                  <address className="not-italic">
                    <span className="lock">Nombre: {ticket.nombre}</span>
                    <span className="block">Apellido: {ticket.apellido}</span>
                    <span className="block">Direccion: {ticket.direccion}</span>
                    <span className="block">Telefono: {ticket.telefono}</span>
                    <span className="block">E-mail: {ticket.email}</span>
                    <span className="block">Fecha de Compra: {(fecha)}</span>
                  </address>
                </dd>
              </div>
            </dl>
            <div className="mt-16 border-t border-gray-200 py-6 text-right">
              <Link
                to="/"
                className="btn btn-outline-dark position-relative ms-1 py-1  w-full"
              >
                Continuar Comprando<span aria-hidden="true"> &rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Order;
