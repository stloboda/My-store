import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const StoreItem = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/products/${id}`)
      .then((response) => response.json())
      .then((products) => {
        setProduct(products);
      });
  }, [id]);

  return (
    <div>
      <div>
        <img src={product.img} />
        <p>{product.name}</p>
      </div>
      <div>{product.title}</div>
    </div>
  );
};

export default StoreItem;
