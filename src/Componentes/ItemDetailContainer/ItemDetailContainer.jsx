import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

function ItemDetailContainer() {
  const [producto, setproducto] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const prod = doc(db, "products", id);
    getDoc(prod).then((res) => {
      setproducto({ id: res.id, ...res.data() });
    });
  }, [id]);

  return (
    <div>
      <ItemDetail producto={producto} />
    </div>
  );
}

export default ItemDetailContainer;
