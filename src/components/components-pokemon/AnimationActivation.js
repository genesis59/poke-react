/*****************************************************************************
	Fonction	:  Gestion de l'activation/désactivation de l'animation des images
	Creation	:  GV juillet-2021
 *****************************************************************************/

import React, { useState } from "react";

const AnimationActivation = () => {
    const [enable,setEnable] = useState("Activer");
  const setAnimation = (e) => {
    
    if (e.target.checked) {
      document.documentElement.style.setProperty(
        "--anim-img-card-pokemon",
        "poke-zoom 2s ease-in-out"
      );
      setEnable("Désactiver");
    }
    if (!e.target.checked) {
      document.documentElement.style.setProperty(
        "--anim-img-card-pokemon",
        "poke-zoom 0s ease-in-out"
      );
      setEnable("Activer");
    }
  };
  return (
    <div className="anmimation-activation-container">
      <input
        type="checkbox"
        id="AnimationActivation"
        defaultChecked
        onChange={(e) => setAnimation(e)}
      />
      <label htmlFor="AnimationActivation">
        {enable} l'animation des images
      </label>
    </div>
  );
};
export default AnimationActivation;
