/******************************************************************
	Fonction	:  Composant principal de la page magic the gathering
	Creation	:  GV juillet-2021
 ******************************************************************/

import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import axios from "axios";
import SetComponent from "../components/components-magic-the-gathering/SetComponent";
import CardMagicComponent from "../components/components-magic-the-gathering/CardMagicComponent";
import CardWithoutMultiverseComponent from "../components/components-magic-the-gathering/CardWithoutMultiverseComponent";

const Magic = () => {
  document.body.style.setProperty(
    "background",
    'url("./img/bg-magic-the-gathering.jpg") no-repeat fixed center/cover'
  );

  const [data, setData] = useState([]);
  const [dataSet, setDataSet] = useState([]);
  const [usedData, setUsedData] = useState("sets");
  const [targetSet, setTargetSet] = useState("");
  const [nameTargetSet, setNameTargetSet] = useState("Magic the gathering");
  const [playOnceSet, setPlayOnceSet] = useState(true);
  const [playOnceTargetSet, setPlayOnceTargetSet] = useState(false);
  const [totalCount, setTotalCount] = useState();
  const [pageSize, setPageSize] = useState(12);
  const [page, setPage] = useState(1);

  const cancelTokenSource = axios.CancelToken.source();

  useEffect(() => {}, [
    playOnceTargetSet,
    page,
    pageSize,
    dataSet,
    targetSet,
    cancelTokenSource,
  ]);

  useEffect(() => {
    if (playOnceSet) {
      axios.get("https://api.magicthegathering.io/v1/sets/").then((res) => {
        setData(res.data.sets);
      });
      setPlayOnceSet(false);
    } else if (playOnceTargetSet) {
      axios
        .get(
          "https://api.magicthegathering.io/v1/cards?page=" +
            page +
            "&pageSize=" +
            pageSize +
            "&set=" +
            targetSet
        )
        .then((res) => {
          setDataSet(res.data.cards);
          setTotalCount(res.headers["total-count"]);
        });
      setPlayOnceTargetSet(false);
    }
  }, [
    playOnceSet,
    playOnceTargetSet,
    data,
    dataSet,
    pageSize,
    targetSet,
    page,
  ]);

  const getSet = (code, name) => {
    setTargetSet(code);
    setNameTargetSet(name);
    setUsedData("cards");
    setPlayOnceTargetSet(true);
  };

  const returnListSets = () => {
    console.log("coucou");
    setUsedData("sets");
  };

  const pageNext = () => {
    setPage(page + 1);
    setPlayOnceTargetSet(true);
  };
  const pagePrevious = () => {
    setPage(page - 1);
    setPlayOnceTargetSet(true);
  };

  return (
    <div className="magic-the-gathering-page">
      <Navigation theme="magic-the-gathering" />
      <h1 className="header-title">{nameTargetSet}</h1>

      <div className="next-previous">
        {usedData === "cards" && page > 1 && (
          <span onClick={pagePrevious}>previous</span>
        )}
        {usedData === "cards" && (
          <span onClick={returnListSets}>retour à la liste des sets</span>
        )}
        {usedData === "cards" && page < (totalCount/pageSize) && (
          <span onClick={pageNext}>next</span>
        )}
      </div>
      <div className="magic-the-gathering-list-container">
        {usedData === "sets" &&
          data
            .sort(function (a, b) {
              const dateA = new Date(a.releaseDate);
              const dateB = new Date(b.releaseDate);
              return dateB - dateA;
            })
            .map((set) => {
              return <SetComponent set={set} key={set.code} getSet={getSet} />;
            })}
        {usedData === "cards" &&
          dataSet.map((card) => {
            if (card.multiverseid) {
              return <CardMagicComponent card={card} key={card.id} />;
            } else {
              return (
                <CardWithoutMultiverseComponent card={card} key={card.id} />
              );
            }
          })}
      </div>
    </div>
  );
};

export default Magic;
