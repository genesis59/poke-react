/*****************************************************************************
	Fonction	:  Gestion de l'activation/désactivation de l'animation des images
	Creation	:  GV juillet-2021
 *****************************************************************************/

import React, { useRef, useState } from "react";

const AnimationActivation = () => {
  const [enable, setEnable] = useState("Activer");

  const divActiveAnimation = useRef();
  
    const setAnimation = () => {
      divActiveAnimation.current.checked = !divActiveAnimation.current.checked;
      if(divActiveAnimation.current.checked){
        document.documentElement.style.setProperty(
          "--anim-img-card-pokemon",
          "poke-zoom 2s ease-in-out"
        );
        setEnable("Désactiver");
      } else {
        document.documentElement.style.setProperty(
          "--anim-img-card-pokemon",
          "poke-zoom 0s ease-in-out"
        );
        setEnable("Activer");
      }

    }
  return (
    <div className="anmimation-activation-container" onClick={setAnimation}>
      <input
        type="checkbox"
        ref={divActiveAnimation}
      />
      <label>
        {enable} l'animation des images
      </label>
    </div>
  );
};
export default AnimationActivation;
