import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function CartWidget() {
  return (
    <div>
      <button type="button" className="btn btn-outline-dark position-relative ms-2">
      Carrito
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
          0
        </span>
      </button>
    </div>
  );
}

export default CartWidget;
