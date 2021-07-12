/*******************************************************************************
	Fonction	:  Gestion selecteur de page et nombres total d'entité de la liste
	Creation	:  GV juillet-2021
 ******************************************************************************/

import React, { useState } from "react";
import AnimationActivation from "./AnimationActivation";

const InfoGeneral = ({
  count,
  numberCardPageByType,
  targetPage,
  setChoicePage,
  typeOnGoing,
  pageOnGoing,
}) => {
  const [error,setError] = useState(false);
  return (
    <div className="info-general-container">
      <div>
        <span>Page actuelle:</span>
        <span className="totalPokemon"> {pageOnGoing} </span>
        <span className="ml">Total pokemon type {typeOnGoing}:</span>{" "}
        <span className="totalPokemon">{count}</span>
      </div>
      <div className="select-page-container">
        <span className={error ? "error" : ""}>{error ? ("⚠ La page doit être comprise entre 1 et " + String(Math.ceil(count / numberCardPageByType))) : "Choix de la page:"}</span>
        <input
          type="number"
          onChange={(e) => {
            if (
              e.target.value >= 1 &&
              e.target.value <= Math.ceil(count / numberCardPageByType)
            ) {
              setChoicePage(e.target.value);
              setError(false);
            } else {
              setError(true);
            }
          }}
          min="1"
          max={String(Math.ceil(count / numberCardPageByType))}
          defaultValue="1"
        />
        <span> sur {Math.ceil(count / numberCardPageByType)}</span>
        <button className={error ? "button-error" : "button-granted"} type="submit" onClick={error ? "" : targetPage}>
          {error ? "⛔" : "VALIDER"}
        </button>
      </div>
      <AnimationActivation />
    </div>
  );
};

export default InfoGeneral;
