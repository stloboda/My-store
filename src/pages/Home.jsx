import React from "react";
import TitlePath from "../components/HomePage/TitlePath";
import CardList from "../components/HomePage/CardList";
import HomeCss from "./Home.module.css";
import AboutPath from "../components/HomePage/AboutPath";

const Home = () => {
  return (
    <div className={HomeCss.home}>
      <TitlePath />
      <CardList />
      <AboutPath />
    </div>
  );
};

export default Home;
