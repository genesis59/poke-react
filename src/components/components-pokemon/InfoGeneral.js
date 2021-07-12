/*******************************************************************************
	Fonction	:  Gestion selecteur de page et nombres total d'entité de la liste
	Creation	:  GV juillet-2021
 ******************************************************************************/

import React from "react";
import AnimationActivation from "./AnimationActivation";

const InfoGeneral = ({
  count,
  numberCardPageByType,
  targetPage,
  setChoicePage,
  typeOnGoing,
  pageOnGoing,
  setPageOnGoing,
}) => {
  console.log(pageOnGoing);

  return (
    <div className="info-general-container">
      <div>
        <span>Page actuelle:</span>
        <span className="totalPokemon"> {pageOnGoing} </span>
        <span className="ml">Total pokemon type {typeOnGoing}:</span>{" "}
        <span className="totalPokemon">{count}</span>
      </div>
      <div>
        <span>Choix de la page:</span>
        <input
          type="number"
          onChange={(e) => setChoicePage(e.target.value)}
          min="1"
          max={Math.ceil(count / numberCardPageByType)}
          defaultValue="1"
        />
        <span> sur {Math.ceil(count / numberCardPageByType)}</span>
        <button type="submit" onClick={targetPage}>
          valider
        </button>
      </div>
      <AnimationActivation />
    </div>
  );
};

export default InfoGeneral;
