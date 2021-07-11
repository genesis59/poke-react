import React from "react";
import Navigation from "../components/Navigation";

const HarryPotter = () => {
  document.body.style.setProperty(
    "background",
    'url("./img/bg-harry-potter.jpg") no-repeat fixed center/cover'
  );
  return (
    <div className="harry-potter-list-container">
      <Navigation theme="harry-potter" />
      <h1 className="header-title">Harry potter</h1>
    </div>
  );
};

export default HarryPotter;
