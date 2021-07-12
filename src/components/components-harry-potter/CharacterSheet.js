import React from "react";

const CharacterSheet = ({ character }) => {
  return (
    <div className="character-container">
      <img src={character.image} alt={"photo de " + character.name} />
      <h2>{character.name}</h2>
      <p className="p1">
        Genre: <span className="response">{character.gender}</span>
      </p>
      <p className="p2">
        Maison:
        <span className="response">
          {character.house !== "" ? character.house : "Inconnu"}
        </span>
      </p>
      <p className="p3">
        Date de naissance:
        <span className="response">
          {character.dateOfBirth !== "" ? character.dateOfBirth : "Inconnu"}
        </span>
      </p>
      <p className="p4">
        Ancêtres:
        <span className="response">
          {character.ancestry !== "" ? character.ancestry : "Inconnu"}
        </span>
      </p>
      <p className="p5">
        Couleur des yeux:
        <span className="response">
          {character.eyeColour !== "" ? character.eyeColour : "Inconnu"}
        </span>
      </p>
      <p className="p6">
        Couleur des cheveux:
        <span className="response">{character.hairColour}</span>
      </p>
      <p className="p7">Baguette: </p>
      <ul>
        <li>
          Bois:
          <span className="response">
            {character.wand.wood !== "" ? character.wand.wood : "Inconnu"}
          </span>
        </li>
        <li>
          Coeur:
          <span className="response">
            {character.wand.core !== "" ? character.wand.core : "Inconnu"}
          </span>
        </li>
        <li>
          Longueur:
          <span className="response">
            {character.wand.length !== "" ? character.wand.length : "Inconnu"}
          </span>
        </li>
      </ul>
      <p className="p8">
        Patronus:
        <span className="response">
          {character.patronus !== "" ? character.patronus : "Inconnu"}
        </span>
      </p>
      <p className="p9">
        Acteur: <span className="response">{character.actor}</span>
      </p>
    </div>
  );
};

export default CharacterSheet;
