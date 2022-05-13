import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartContext } from "../../CartContext/CartContext";
import { Link } from "react-router-dom";

function CartWidget() {
  const { totalItem } = useContext(CartContext);

  return (
    <div>
      <Link to="shoppingcart">
        <button
          type="button"
          className="btn btn-outline-dark position-relative ms-2"
        >
          Carrito
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
            {totalItem}
          </span>
        </button>
      </Link>
    </div>
  );
}

export default CartWidget;
