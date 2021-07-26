/******************************************************************
	Fonction	:  Composant principal de la page pokemon
	Creation	:  GV juillet-2021
 ******************************************************************/

import axios from "axios";
import { useState, useEffect } from "react";
import CountPokemonPage from "../components/components-pokemon/CountPokemonPage";
import Navigation from "../components/Navigation";
import NextPrevious from "../components/components-pokemon/NextPrevious";
import PokeCard from "../components/components-pokemon/PokeCard";
import CardSizeRange from "../components/components-pokemon/CardSizeRange";
import SelectTypePokemon from "../components/components-pokemon/SelectTypePokemon";
import InfoGeneral from "../components/components-pokemon/InfoGeneral";

const Pokemon = () => {
  document.body.style.setProperty(
    "background",
    'url("./img/bg-pokemon.jpg") no-repeat fixed center/cover'
  );

  const [
    count,
    existPagePrevious,
    existPageNext,
    pageNext,
    pagePrevious,
    dataDetailPokemon,
    getData,
  ] = useDataPokemon();
  // évite que les données soit demandés en boucle
  const [playOnce, setPlayOnce] = useState(true);
  const [indexTabType, setIndexTabType] = useState(0);
  // page courante
  const [page, setPage] = useState(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=12"
  );
  const [disabledRadio, loading, waitLoading] = useLoading();
  // recherche par type ?
  const [byType, setByType] = useState(false);
  // nombre de carte actuel sur la page
  const [numberCardPageByType, setNumberCardPageByType] = useState(12);
  // page ciblée par l'utilisateur
  const [choicePage, setChoicePage] = useState(1);
  // type actuel
  const [typeOnGoing, setTypeOnGoing] = useState("Divers");
  // page actuel
  const [pageOnGoing, setPageOnGoing] = useState(1);

  useEffect(() => {
    if (playOnce) {
      // Récupération des données de la page
      getData(page, byType, indexTabType, numberCardPageByType, setPlayOnce);
    }
  }, [playOnce, page, byType, numberCardPageByType, indexTabType, getData]);

  // gestion nombres de pokemon par page
  const pokemonPerPage = (e) => {
    waitLoading();
    if (byType) {
      setNumberCardPageByType(e.target.value);
    } else {
      let newPage = page.substr(0, page.length - 2) + e.target.value;
      console.log(newPage);
      setPage(newPage);
      setNumberCardPageByType(e.target.value);
    }
    setPlayOnce(true);
  };

  // gestion des boutons radio pour la selection du type
  const pokemonType = (e) => {
    waitLoading();
    let pageType = "";
    if (e.target.value === "no-type") {
      setTypeOnGoing("Divers");
      pageType =
        "https://pokeapi.co/api/v2/pokemon?offset=0&limit=" +
        numberCardPageByType;
      setIndexTabType(0);
      setByType(false);
      setPageOnGoing(1);
    } else {
      setTypeOnGoing(e.target.id);
      pageType = "https://pokeapi.co/api/v2/type/" + e.target.value;
      setIndexTabType(0);
      setByType(true);
      setPageOnGoing(1);
    }
    setPage(pageType);
    setPlayOnce(true);
  };

  // gestion des boutons next/previous et choix de page

  const targetPage = () => {
    waitLoading();
    if (byType) {
      setIndexTabType((choicePage - 1) * numberCardPageByType);
    } else {
      setPage(
        "https://pokeapi.co/api/v2/pokemon?offset=" +
          (choicePage - 1) * numberCardPageByType +
          "&limit=" +
          numberCardPageByType
      );
    }
    setPageOnGoing(choicePage);
    if (!disabledRadio) {
      setPlayOnce(true);
    }
  };

  const nextPage = () => {
    nextPreviousPage(1);
  };

  const previousPage = () => {
    nextPreviousPage(-1);
  };

  const nextPreviousPage = (signe) => {
    waitLoading();
    if (byType) {
      setIndexTabType(
        parseInt(indexTabType) +
          parseInt(signe) * parseInt(numberCardPageByType)
      );
    } else {
      if (signe === -1) {
        setPage(pagePrevious);
      } else {
        setPage(pageNext);
      }
    }
    setPageOnGoing(parseInt(pageOnGoing) + parseInt(signe));
    if (!disabledRadio) {
      setPlayOnce(true);
    }
  };

  // affichage
  return (
    <div className="pokemon-list-container">
      <Navigation theme="pokemon" />
      <h1 className="header-title">Liste des pokemon</h1>
      <div className="config-page" id="nextPrevious">
        <CountPokemonPage pokemonPerPage={pokemonPerPage} />
        <CardSizeRange />
      </div>
      <div className="config-type">
        <SelectTypePokemon
          pokemonType={pokemonType}
          disableRadio={disabledRadio}
        />
      </div>
      <InfoGeneral
        count={count}
        numberCardPageByType={numberCardPageByType}
        targetPage={targetPage}
        setChoicePage={setChoicePage}
        typeOnGoing={typeOnGoing}
        pageOnGoing={pageOnGoing}
      />
      <NextPrevious
        existPagePrevious={existPagePrevious}
        existPageNext={existPageNext}
        previousPage={previousPage}
        nextPage={nextPage}
        loading={loading}
      />
      <PokeCard dataDetailPokemon={dataDetailPokemon} />
    </div>
  );
};

// Hook récupération de la liste demandé
const useDataPokemon = () => {
  // liste des pokemon de la page courante
  const [data, setData] = useState();
  // nombre de pokemon total du type en cours
  const [count, setCount] = useState();
  // Hook perso gestion des boutons next/previous
  const [existPagePrevious, existPageNext, pageNext, pagePrevious, setButton] =
    useButtonState();
  // détail des pokemon de la page courante
  const [dataDetailPokemon, getDataDetailPokemon] = useDataDetailPokemon([]);

  const getData = async (
    page,
    byType,
    indexTabType,
    numberCardPageByType,
    setPlayOnce
  ) => {
    await axios.get(page).then((res) => {
      if (byType) {
        setData(res.data.pokemon);
        getDataDetailPokemon(
          res.data.pokemon,
          indexTabType,
          numberCardPageByType,
          byType
        );
        setCount(res.data.pokemon.length);
      } else {
        setCount(res.data.count);
        setData(res.data.results);
        getDataDetailPokemon(
          res.data.results,
          indexTabType,
          numberCardPageByType,
          byType
        );
      }
      setButton(res, data, byType, indexTabType, numberCardPageByType);
    });
    setPlayOnce(false);
  };

  return [
    count,
    existPagePrevious,
    existPageNext,
    pageNext,
    pagePrevious,
    dataDetailPokemon,
    getData,
  ];
};

// Hook récupération des données détaillés des pokemon de la response
const useDataDetailPokemon = () => {
  const [data, setData] = useState([]);

  const getDataDetailPokemon = async (
    res,
    indexTabType,
    numberCardPageByType,
    byType
  ) => {
    let tabListDetail = [];

    for (let i = 0; i < res.length; i++) {
      if (byType) {
        await axios
          .get(res[i].pokemon.url)
          .then((res) => {
            tabListDetail[i] = res;
          })
          .then(() => {
            setData(
              tabListDetail.slice(
                indexTabType,
                parseInt(indexTabType) + parseInt(numberCardPageByType)
              )
            );
          });
      } else {
        await axios
          .get(res[i].url)
          .then((res) => {
            tabListDetail[i] = res;
          })
          .then(() => setData(tabListDetail));
      }
    }
  };
  return [data, getDataDetailPokemon];
};

// Hook gestion des boutons next/previous

const useButtonState = () => {
  const [existPagePrevious, setExistPagePrevious] = useState();
  const [existPageNext, setExistPageNext] = useState();
  const [pageNext, setPageNext] = useState();
  const [pagePrevious, setPagePrevious] = useState();
  const setButton = (res, data, byType, indexTabType, numberCardPageByType) => {
    if (byType) {
      if (indexTabType === 0) {
        setExistPagePrevious(false);
      } else {
        setExistPagePrevious(true);
      }
      if (indexTabType <= data.length - numberCardPageByType - 1) {
        setExistPageNext(true);
      } else {
        setExistPageNext(false);
      }
    } else {
      if (res.data.next) {
        setPageNext(res.data.next);
        setExistPageNext(true);
      } else {
        setExistPageNext(false);
      }
      if (res.data.previous) {
        setPagePrevious(res.data.previous);
        setExistPagePrevious(true);
      } else {
        setExistPagePrevious(false);
      }
    }
  };

  return [existPagePrevious, existPageNext, pageNext, pagePrevious, setButton];
};

const useLoading = (time = 5000) => {
  // activation/désactivation des boutons radio
  const [disabledRadio, setDisabledRadio] = useState(false);
  // traitement de la requete en cours
  const [loading, setLoading] = useState(false);

  const waitLoading = () => {
    setDisabledRadio(true);
    setLoading(true);
    setTimeout(() => {
      setDisabledRadio(false);
      setLoading(false);
    }, time);
  };

  return [disabledRadio, loading, waitLoading];
};

export default Pokemon;
