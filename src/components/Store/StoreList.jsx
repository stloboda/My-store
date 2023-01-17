import React from "react";
import StoreListCss from "./StoreList.module.css";
import { NavLink } from "react-router-dom";

const StoreList = (props) => {
  return (
    <div className={StoreListCss.card}>
      <div className={StoreListCss.header}>
        <img src={props.product.img} className={StoreListCss.cardImg} />
      </div>
      <div className={StoreListCss.body}>
        <h4 className={StoreListCss.nameCard}>{props.product.name}</h4>
        <p className={StoreListCss.descCard}>{props.product.title}</p>
      </div>
      <div className={StoreListCss.footer}>
        <button className={StoreListCss.cardBtn}>
          <NavLink to={`/store/${props.product.id}`}>View more</NavLink>
        </button>
      </div>
    </div>
  );
};

export default StoreList;
