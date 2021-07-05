import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <h1 className="titre-1">poke-react</h1>
      <h1 className="titre-2">poke-react</h1>
      <h1 className="titre-3">poke-react</h1>
      <div className="nav-pokeball-container">
        <img src="./pokeball.png" alt="pokeball" className="nav-pokeball" />
      </div>
      <ul className="nav-menu">
        <li className="nav-menu-item">
          <NavLink exact to="/" activeClassName="nav-active">
            Liste pokémon
          </NavLink>
        </li>
        <li className="nav-menu-item">
          <NavLink exact to="/berry" activeClassName="nav-active">
            Liste berry
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
