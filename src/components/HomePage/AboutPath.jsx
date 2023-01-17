import React from "react";
import AboutPathCss from "./AboutPath.module.css";
import { NavLink } from "react-router-dom";

const AboutPath = () => {
  return (
    <div className={AboutPathCss.container}>
      <div className={AboutPathCss.title}>
        <h1 className={AboutPathCss.mainText}>About us</h1>
        <p className={AboutPathCss.secondText}>
          Impetus oporteat suavitate ut eum. At atqui ullum audire eos, mel in
          amet dolores gubergren, usu ea labores posidonium
        </p>
      </div>
      <div className={AboutPathCss.contant}>
        <div className={AboutPathCss.img}>
          <img
            src={"/image/resize play_10-android_dev.png"}
            className={AboutPathCss.imgContent}
          />
        </div>
        <div className={AboutPathCss.contentText}>
          <h4 className={AboutPathCss.contentTitle}>Lorem ipsum</h4>
          <p className={AboutPathCss.secondText}>
            Quisque pellentesque mauris nisi, eget faucibus metus viverra non.
            Donec a nisi ante. Fusce vehicula elit vel risus tempus, eu placerat
            libero porta. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Duis nec ornare ante
          </p>
          <button className={AboutPathCss.mainBtn}>
            <NavLink to="/about">Let's go</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPath;
