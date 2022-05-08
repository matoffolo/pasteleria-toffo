import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import Spinner from "../Spinner/Spinner";
import { useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
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
        where("categoria", "===", categoryId)
      );
    }

    getDocs(productosRef).then((res) => {
      setProducts(res.docs.map((item) => ({ id: item.id, ...item.data() })));
      setTimeout(() => {
        setIsLoading(false);
      });
    });
  }, [categoryId]);



  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <ItemList
            productos={
              !categoryId
                ? products
                : products.filter(({ categoria }) => categoria === categoryId)
            }
          />
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
