import React from "react";
import CardListCss from "./CardList.module.css";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const CardList = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then((response) => response.json())
      .then((products) => {
        setProduct(products);
      });
  }, []);

  return (
    <div className={CardListCss.listCard}>
      <div className={CardListCss.titleCard}>
        <h1 className={CardListCss.mainText}>Our products</h1>
        <p className={CardListCss.secondText}>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected humour
        </p>
      </div>
      <div className={CardListCss.container}>
        {products.slice(0, 3).map((product) => (
          <div className={CardListCss.card} key={product.id}>
            <div className={CardListCss.header}>
              <img
                src={product.img}
                className={CardListCss.cardImg}
                alt="card"
              />
            </div>
            <div className={CardListCss.body}>
              <h4 className={CardListCss.nameCard}>{product.name}</h4>
              <p className={CardListCss.descCard}>{product.title}</p>
            </div>
            <div className={CardListCss.footer}>
              <button className={CardListCss.cardBtn}>
                <NavLink to={`/store/${product.id}`}>View more</NavLink>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList;
