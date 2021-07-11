import React from "react";
import Navigation from "../components/Navigation";

const Ghibli = () => {
  document.body.style.setProperty(
    "background",
    'url("./img/bg-ghibli.png") no-repeat fixed center/cover'
  );
  return (
    <div className="ghibli-list-container">
      <Navigation theme="ghibli" />
      <h1 className="header-title">Ghibli</h1>
    </div>
  );
};

export default Ghibli;
