/******************************************************************
	Fonction	:  Gestion de la taille des cartes
	Creation	:  GV juillet-2021
 ******************************************************************/

import React from "react";

const CardSizeRange = ({ cardSize }) => {
  return (
    <div className="card-range-size-container">
      <label htmlFor="range">Surface carte</label>
      <div className="card-range-size-input-container">
        <input
          type="range"
          id="range"
          min="2"
          max="7"
          step="1"
          defaultValue="4"
          onChange={cardSize}
        />
      </div>
    </div>
  );
};

export default CardSizeRange;
