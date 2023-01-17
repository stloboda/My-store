import React from "react";
import TitlePathCss from "./TitlePath.module.css";
import { NavLink } from "react-router-dom";

function TitlePath() {
  return (
    <div className={TitlePathCss.container}>
      <div className={TitlePathCss.title}>
        <h1 className={TitlePathCss.mainText}>Welcome to MyStore</h1>
        <p className={TitlePathCss.secondText}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <button className={TitlePathCss.mainBtn}>
          <NavLink to="/signin">Apply now</NavLink>
        </button>
      </div>
      <div className={TitlePathCss.wallpaper}>
        <img
          className={TitlePathCss.imgMain}
          src={"/image/PPPPZ 1.png"}
          alt="wallpaper"
        />
      </div>
    </div>
  );
}

export default TitlePath;
