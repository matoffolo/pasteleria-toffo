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
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    });
  }, [categoryId]);

  return (
    <>
      <div className="container my-1 py-2">
        <div className="row">
          <div className="col-12 mb-2">
            <h1 className="display-6 fw-bolder text-center">
              NUESTROS PRODUCTOS
            </h1>
          </div>
        </div>
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
