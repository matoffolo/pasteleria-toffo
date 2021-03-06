import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";

function ItemList({ productos }) {
  return (
    <div className="itemList">
      {productos.map((producto) => (
        <Item key={producto.id} producto={producto} />
      ))}
    </div>
  );
}

export default ItemList;
