import React, { useState } from "react";

const SelectTypePokemon = ({ pokemonType, disableRadio }) => {
  const [textMenu, setTextMenu] = useState("Ouvrir");
  let displayNone = true;

  const displayType = () => {
    if (displayNone) {
      document.documentElement.style.setProperty(
        "--display-open-close",
        "flex"
      );
      document.documentElement.style.setProperty(
        "--anim-open-close",
        "2s opening ease-in-out"
      );
      setTimeout(() => {
        setTextMenu("Fermer");
      }, 500);
      displayNone = false;
    } else {
      document.documentElement.style.setProperty(
        "--anim-open-close",
        "2s closing ease-in-out"
      );

      setTimeout(() => {
        document.documentElement.style.setProperty(
          "--display-open-close",
          "none"
        );
        setTextMenu("Ouvrir");
      }, 2000);
      displayNone = true;
    }
    return textMenu;
  };
  return (
    <div className="display-type">
      <div className="label-select-type">
        <p onClick={displayType}> {textMenu + " le menu des types"}</p>
      </div>
      <div className="select-type-pokemon-container">
        <input
          type="radio"
          name="type"
          id="normal"
          value="1"
          onChange={pokemonType}
          disabled={disableRadio ? "disabled" : ""}
        />
        <label htmlFor="normal">normal</label>
        <input
          type="radio"
          name="type"
          id="fighting"
          value="2"
          onChange={pokemonType}
          disabled={disableRadio ? "disabled" : ""}
        />
        <label htmlFor="fighting">fighting</label>
        <input
          type="radio"
          name="type"
          id="flying"
          value="3"
          onChange={pokemonType}
          disabled={disableRadio ? "disabled" : ""}
        />
        <label htmlFor="flying">flying</label>
        <input
          type="radio"
          name="type"
          id="poison"
          value="4"
          onChange={pokemonType}
          disabled={disableRadio ? "disabled" : ""}
        />
        <label htmlFor="poison">poison</label>
        <input
          type="radio"
          name="type"
          id="ground"
          value="5"
          onChange={pokemonType}
          disabled={disableRadio ? "disabled" : ""}
        />
        <label htmlFor="ground">ground</label>
        <input
          type="radio"
          name="type"
          id="rock"
          value="6"
          onChange={pokemonType}
          disabled={disableRadio ? "disabled" : ""}
        />
        <label htmlFor="rock">rock</label>
        <input
          type="radio"
          name="type"
          id="bug"
          value="7"
          onChange={pokemonType}
          disabled={disableRadio ? "disabled" : ""}
        />
        <label htmlFor="bug">bug</label>
        <input
          type="radio"
          name="type"
          id="ghost"
          value="8"
          onChange={pokemonType}
          disabled={disableRadio ? "disabled" : ""}
        />
        <label htmlFor="ghost">ghost</label>
        <input
          type="radio"
          name="type"
          id="steel"
          value="9"
          onChange={pokemonType}
          disabled={disableRadio ? "disabled" : ""}
        />
        <label htmlFor="steel">steel</label>
        <input
          type="radio"
          name="type"
          id="fire"
          value="10"
          onChange={pokemonType}
          disabled={disableRadio ? "disabled" : ""}
        />
        <label htmlFor="fire">fire</label>
        <input
          type="radio"
          name="type"
          id="water"
          value="11"
          onChange={pokemonType}
          disabled={disableRadio ? "disabled" : ""}
        />
        <label htmlFor="water">water</label>
        <input
          type="radio"
          name="type"
          id="grass"
          value="12"
          onChange={pokemonType}
          disabled={disableRadio ? "disabled" : ""}
        />
        <label htmlFor="grass">grass</label>
        <input
          type="radio"
          name="type"
          id="electric"
          value="13"
          onChange={pokemonType}
          disabled={disableRadio ? "disabled" : ""}
        />
        <label htmlFor="electric">electric</label>
        <input
          type="radio"
          name="type"
          id="psychic"
          value="14"
          onChange={pokemonType}
          disabled={disableRadio ? "disabled" : ""}
        />
        <label htmlFor="psychic">psychic</label>
        <input
          type="radio"
          name="type"
          id="ice"
          value="15"
          onChange={pokemonType}
          disabled={disableRadio ? "disabled" : ""}
        />
        <label htmlFor="ice">ice</label>
        <input
          type="radio"
          name="type"
          id="dragon"
          value="16"
          onChange={pokemonType}
          disabled={disableRadio ? "disabled" : ""}
        />
        <label htmlFor="dragon">dragon</label>
        <input
          type="radio"
          name="type"
          id="dark"
          value="17"
          onChange={pokemonType}
          disabled={disableRadio ? "disabled" : ""}
        />
        <label htmlFor="dark">dark</label>
        <input
          type="radio"
          name="type"
          id="fairy"
          value="18"
          onChange={pokemonType}
          disabled={disableRadio ? "disabled" : ""}
        />
        <label htmlFor="fairy">fairy</label>
        <input
          type="radio"
          name="type"
          id="tous-types"
          value="no-type"
          onChange={pokemonType}
          defaultChecked
          disabled={disableRadio ? "disabled" : ""}
        />
        <label htmlFor="tous-types">Tous types</label>
      </div>
    </div>
  );
};

export default SelectTypePokemon;
