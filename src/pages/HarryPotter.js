/******************************************************************
	Fonction	:  Composant principal de la page harry potter
	Creation	:  GV juillet-2021
 ******************************************************************/

import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import axios from "axios";
import CharacterSheet from "../components/components-harry-potter/CharacterSheet";
import SelectCategories from "../components/components-harry-potter/SelectCategories";

const HarryPotter = () => {
  document.body.style.setProperty(
    "background",
    'url("./img/bg-harry-potter.jpg") no-repeat fixed center/cover'
  );

  // cache des data de départ
  const [data, setData] = useState([]);
  // data avant et après filtre
  const [dataFiltered, setDataFiltered] = useState([]);
  const [playOnce, setPlayOnce] = useState(true);

  useEffect(() => {
    if (playOnce) {
      axios.get("http://hp-api.herokuapp.com/api/characters").then((res) => {
        setData(res.data);
        setDataFiltered(res.data);
      });
    }
    setPlayOnce(false);
  }, [playOnce, data]);
  const filterData = (e) => {
    switch (e.target.id) {
      case "all":
        setDataFiltered(data);
        break;
      case "male":
        setDataFiltered(data.filter((item) => item.gender === "male"));
        break;
      case "female":
        setDataFiltered(data.filter((item) => item.gender === "female"));
        break;
      case "Gryffindor":
        setDataFiltered(data.filter((item) => item.house === "Gryffindor"));
        break;
      case "Slytherin":
        setDataFiltered(data.filter((item) => item.house === "Slytherin"));
        break;
      case "Hufflepuff":
        setDataFiltered(data.filter((item) => item.house === "Hufflepuff"));
        break;
      case "Ravenclaw":
        setDataFiltered(data.filter((item) => item.house === "Ravenclaw"));
        break;
      case "alive":
        console.log("pas coucou");
        setDataFiltered(data.filter((item) => item.alive === true));
        break;
      case "deceased":
        console.log("coucou");
        setDataFiltered(data.filter((item) => item.alive === false));
        break;
      default:
        break;
    }
  };

  return (
    <div className="harry-potter-list-container">
      <Navigation theme="harry-potter" />
      <h1 className="header-title">Harry potter</h1>
      <div className="config-page" id="nextPrevious">
        <SelectCategories filterData={filterData} />
      </div>
      <div className="characters-list-container">
        {dataFiltered.map((character) => (
          <CharacterSheet character={character} key={character.name} />
        ))}
      </div>
    </div>
  );
};

export default HarryPotter;
