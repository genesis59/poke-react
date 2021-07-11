import React from "react";
import AnimationActivation from "./AnimationActivation";

const InfoGeneral = ({
  count,
  numberCardPageByType,
  targetPage,
  setChoicePage,
  typeOnGoing,
}) => {
  return (
    <div className="info-general-container">
      <div>
        <span>Total pokemon type {typeOnGoing}:</span> <span className="totalPokemon">{count}</span>
      </div>
      <div>
        <span>Page</span>
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
      < AnimationActivation />
    </div>
  );
};

export default InfoGeneral;
