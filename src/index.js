/******************************************************************
	Fonction	:  Fichier source et liaison avec le fichier index.html
	Creation	:  GV juillet-2021
 ******************************************************************/

import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
