/******************************************************************
	Fonction	:  Gestion de la taille des cartes
	Creation	:  GV juillet-2021
 ******************************************************************/

import React from "react";

const CardSizeRange = () => {
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

// gestion de la taille des cartes
const cardSize = (e) => {
  document.documentElement.style.setProperty("--card-size", e.target.value);
  let coef;
  switch (e.target.value) {
    case "2":
      coef = 6;
      break;
    case "3":
      coef = 5;
      break;
    case "4":
      coef = 4;
      break;
    case "5":
      coef = 3;
      break;
    case "6":
      coef = 2;
      break;
    case "7":
      coef = 1;
      break;
    default:
      coef = 4;
      break;
  }
  document.documentElement.style.setProperty(
    "--card-zoom",
    coef * 0.2 + 2 + "px"
  );
};

export default CardSizeRange;
