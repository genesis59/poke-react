import React from "react";

const CountPokemonPage = ({ pokemonPerPage }) => {
  return (
    <div className="count-pokemon-page-container">
      <label htmlFor="count-per-page">Carte par page </label>
      <div className="count-pokemon-page-input-container">
        <select name="" id="count-per-page" onChange={pokemonPerPage}>
          <option value="12">12</option>
          <option value="16">16</option>
          <option value="24">24</option>
        </select>
      </div>
    </div>
  );
};

export default CountPokemonPage;
