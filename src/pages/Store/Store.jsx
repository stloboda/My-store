import React from "react";
import { useState, useEffect } from "react";
import StoreList from "../../components/Store/StoreList";
import StoreCss from "./Store.module.css";

const Store = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then((response) => response.json())
      .then((products) => {
        setProduct(products);
      });
  }, []);

  return (
    <div>
      <div className={StoreCss.cardList}>
        {products.map((product) => (
          <StoreList product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Store;
