/******************************************************************
	Fonction	:  Gestion du logo et du menu de navigation
	Creation	:  GV juillet-2021
 ******************************************************************/

import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = ({ theme }) => {
  return (
    <div className={"navigation-" + theme}>
      <h1 className="titre-1">api-react</h1>
      <h1 className="titre-2">api-react</h1>
      <h1 className="titre-3">api-react</h1>
      <div className="nav-logo-container">
        <img
          src={"./img/" + theme + ".png"}
          alt={"logo" + theme}
          className="nav-pokeball"
        />
      </div>
      <ul className="nav-menu">
        <li className="nav-menu-item">
          <NavLink exact to="/" activeClassName="nav-active">
            PokéAPI
          </NavLink>
        </li>
        <li className="nav-menu-item">
          <NavLink exact to="/ghibli" activeClassName="nav-active">
            Api Ghibli
          </NavLink>
        </li>
        <li className="nav-menu-item">
          <NavLink exact to="/magic-the-gathering" activeClassName="nav-active">
            Api Magic The Gathering
          </NavLink>
        </li>
        <li className="nav-menu-item">
          <NavLink exact to="/harry-potter" activeClassName="nav-active">
            Api Harry Potter
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
