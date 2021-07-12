/******************************************************************
	Fonction	:  Composant principal de la page magic the gathering
	Creation	:  GV juillet-2021
 ******************************************************************/

import React from "react";
import Navigation from "../components/Navigation";

const Magic = () => {
  document.body.style.setProperty(
    "background",
    'url("./img/bg-magic-the-gathering.jpg") no-repeat fixed center/cover'
  );
  return (
    <div className="magic-the-gathering-list-container">
      <Navigation theme="magic-the-gathering" />
      <h1 className="header-title">Magic the gathering</h1>
    </div>
  );
};

export default Magic;
