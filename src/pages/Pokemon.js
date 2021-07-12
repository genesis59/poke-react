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
  // liste des pokemon de la page courante
  const [data, setData] = useState([]);
  // détail des pokemon de la page courante
  const [dataDetailPokemon, setDataDetailPokemon] = useState([]);
  const [indexTabType, setIndexTabType] = useState(0);
  // page courante
  const [page, setPage] = useState(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=12"
  );
  const [playOnce, setPlayOnce] = useState(true);
  // url de la liste des pokemon de la page suivante
  const [pageNext, setPageNext] = useState("");
  // url de la liste des pokemon de la page précédente
  const [pagePrevious, setPagePrevious] = useState("");
  // existance page précédente/suivante
  const [existPagePrevious, setExistPagePrevious] = useState(true);
  const [existPageNext, setExistPageNext] = useState(true);
  // recherche par type ?
  const [byType, setByType] = useState(false);
  // nombre de carte actuel sur la page
  const [numberCardPageByType, setNumberCardPageByType] = useState(12);
  // activation/désactivation des boutons radio
  const [disabledRadio, setDisabledRadio] = useState(false);
  // traitement de la requete en cours
  const [loading, setLoading] = useState(false);
  // nombre de pokemon total du type en cours
  const [count, setCount] = useState();
  // page ciblée par l'utilisateur
  const [choicePage, setChoicePage] = useState(1);
  // type actuel
  const [typeOnGoing, setTypeOnGoing] = useState("Divers");
  // page actuel
  const [pageOnGoing, setPageOnGoing] = useState(1);

  useEffect(() => {
    if (playOnce) {
      // Récupération des données de la page
      const getListPokemon = async (page) => {
        await axios.get(page).then((res) => {
          if (byType) {
            setData(res.data.pokemon);
            getDetailPokemon(res.data.pokemon);
            setCount(res.data.pokemon.length);
          } else {
            setCount(res.data.count);
            setData(res.data.results);
            getDetailPokemon(res.data.results);
          }
          settingButtonNextPrevious(res);
          setPlayOnce(false);
        });
      };
      // Récupération des données détaillés des pokemon
      const getDetailPokemon = async (res) => {
        let tabListDetail = [];

        for (let i = 0; i < res.length; i++) {
          if (byType) {
            await axios
              .get(res[i].pokemon.url)
              .then((res) => {
                tabListDetail[i] = res;
              })
              .then(() => {
                setDataDetailPokemon(
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
              .then(() => setDataDetailPokemon(tabListDetail));
          }
        }
      };
      // gestion de l'affichage des boutons next/previous
      const settingButtonNextPrevious = (res) => {
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
      getListPokemon(page);
    }
  }, [data, playOnce, page, byType, numberCardPageByType, indexTabType]);

  // gestion nombres de pokemon par page
  const pokemonPerPage = (e) => {
    setDisabledRadio(true);
    setLoading(true);
    setTimeout(() => {
      setDisabledRadio(false);
      setLoading(false);
    }, 3000);
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
    setDisabledRadio(true);
    setLoading(true);
    setTimeout(() => {
      setDisabledRadio(false);
      setLoading(false);
    }, 4000);
    console.log(e);
    let pageType = "";
    if (e.target.value === "no-type") {
      setTypeOnGoing("Divers");
      pageType =
        "https://pokeapi.co/api/v2/pokemon?offset=0&limit=" +
        numberCardPageByType;
      setIndexTabType(0);
      setByType(false);
    } else {
      setTypeOnGoing(e.target.id);
      pageType = "https://pokeapi.co/api/v2/type/" + e.target.value;
      setIndexTabType(0);
      setByType(true);
    }
    setPage(pageType);
    setPlayOnce(true);
  };

  // gestion des boutons next/previous et choix de page

  const targetPage = () => {
    setDisabledRadio(true);
    setLoading(true);
    setTimeout(() => {
      setDisabledRadio(false);
      setLoading(false);
    }, 3000);
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
    setDisabledRadio(true);
    setLoading(true);
    setTimeout(() => {
      setDisabledRadio(false);
      setLoading(false);
    }, 3000);
    if (byType) {
      setIndexTabType(parseInt(indexTabType) + parseInt(numberCardPageByType));
    } else {
      setPage(pageNext);
    }
    setPageOnGoing(parseInt(pageOnGoing) + 1);
    if (!disabledRadio) {
      setPlayOnce(true);
    }
  };

  const previousPage = () => {
    setDisabledRadio(true);
    setLoading(true);
    setTimeout(() => {
      setDisabledRadio(false);
      setLoading(false);
    }, 2000);
    if (byType) {
      setIndexTabType(parseInt(indexTabType) - parseInt(numberCardPageByType));
    } else {
      setPage(pagePrevious);
    }
    setPageOnGoing(parseInt(pageOnGoing) - 1);
    setPlayOnce(true);
  };

  // gestion de la taille des cartes

  const cardSize = (e) => {
    document.documentElement.style.setProperty("--card-size", e.target.value);
    let coef;
    switch (e.target.value) {
      case "2":
        coef = 6;
        break;
      case "3":
        coef = 5;
        break;
      case "4":
        coef = 4;
        break;
      case "5":
        coef = 3;
        break;
      case "6":
        coef = 2;
        break;
      case "7":
        coef = 1;
        break;
      default:
        coef = 4;
        break;
    }
    document.documentElement.style.setProperty(
      "--card-zoom",
      coef * 0.2 + 2 + "px"
    );
  };

  // affichage
  return (
    <div className="pokemon-list-container">
      <Navigation theme="pokemon" />
      <h1 className="header-title">Liste des pokemon</h1>
      <div className="config-page" id="nextPrevious">
        <CountPokemonPage pokemonPerPage={pokemonPerPage} />
        <CardSizeRange cardSize={cardSize} />
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

export default Pokemon;
