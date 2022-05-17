import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";

import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    let productosRef;
    if (!categoryId) {
      productosRef = collection(db, "products");
    } else {
      productosRef = query( 
        collection(db, "products"),
        where("categoria", "==", categoryId)
      );
    }

    getDocs(productosRef).then((res) => {
      setProductos(res.docs.map((item) => ({ id: item.id, ...item.data() })));
      setIsLoading(false)
    });
  }, [categoryId]);

  return (
    <>
      <div className="text-center">
        <h1 className="text-XL title-font text-gray-600 tracking-widest mb-3 py-4">
          NUESTROS PRODUCTOS
        </h1>
      </div>

      {isLoading ? (
        <Spinner />
      ) : (
        <ItemList
          productos={
            !categoryId
              ? productos
              : productos.filter(({ categoria }) => categoria === categoryId)
          }
        />
      )}
    </>
  );
};

export default ItemListContainer;
