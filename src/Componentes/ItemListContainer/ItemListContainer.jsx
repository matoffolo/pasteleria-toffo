import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    let productosRefe;
    if(!categoryId){
      productosRefe = collection(db, "products");
    }
    else{
      productosRefe = query(collection(db, 'products'), where('category', '===', categoryId));
    }

    getDocs(productosRefe).then((res) => {
      setProducts(res.docs.map((item) => ({ id: item.id, ...item.data() })));
      setTimeout(() => {}, 2000);
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
      <ItemList productos={products} />
    </>
  );
};

export default ItemListContainer;
