/******************************************************************
	Fonction	:  Composant principal de la page ghibli
	Creation	:  GV juillet-2021
 ******************************************************************/

import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import axios from "axios";
import CardFilm from "../components/components-ghibli/CardFilm";

const Ghibli = () => {
  document.body.style.setProperty(
    "background",
    'url("./img/bg-ghibli.png") no-repeat fixed center/cover'
  );

  const [data, setData] = useState([]);
  const [playOnce, setPlayOnce] = useState(true);

  useEffect(() => {
    if (playOnce) {
      axios
        .get("https://ghibliapi.herokuapp.com/films")
        .then((res) => setData(res.data));
      setPlayOnce(false);
    }
  }, [playOnce]);
  return (
    <div className="ghibli-list-container">
      <Navigation theme="ghibli" />
      <h1 className="header-title">Ghibli</h1>
      <div className="list-film-container">
        {data.map((item) => {
          return <CardFilm film={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Ghibli;
