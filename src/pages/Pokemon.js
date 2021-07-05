import axios from "axios";
import { useState, useEffect } from "react";
import CountPokemonPage from "../components/CountPokemonPage";
import Navigation from "../components/Navigation";
import NextPrevious from "../components/NextPrevious";
import PokeCard from "../components/PokeCard";
import CardSizeRange from "../components/CardSizeRange";

const Pokemon = () => {
  // liste des pokemon de la page courante
  const [data, setData] = useState([]);
  // détail des pokemon de la page courante
  const [dataDetailPokemon, setDataDetailPokemon] = useState([]);
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

  useEffect(() => {
    if (playOnce) {
      // Récupération des données de la page
      const getListPokemon = async (page) => {
        await axios.get(page).then((res) => {
          setData(res.data.results);
          settingButtonNextPrevious(res);
          setPlayOnce(false);
          getDetailPokemon(res.data.results);
        });
      };
      getListPokemon(page);
    }
  }, [data, playOnce, page]);

  // Récupération des données détaillés des pokemon
  const getDetailPokemon = async (res) => {
    let tabListDetail = [];

    for (let i = 0; i < res.length; i++) {
      await axios
        .get(res[i].url)
        .then((res) => {
          tabListDetail[res.data.id] = res;
        })
        .then(() => setDataDetailPokemon(tabListDetail));
    }
  };

  // gestion nombres de pokemon par page

  const pokemonPerPage = (e) => {
    let newPage = page.substr(0, page.length - 2) + e.target.value;
    setPage(newPage);
    setPlayOnce(true);
  };

  // gestion des boutons next/previous

  const nextPage = () => {
    setPage(pageNext);
    setPlayOnce(true);
  };
  const previousPage = () => {
    setPage(pagePrevious);
    setPlayOnce(true);
  };
  const settingButtonNextPrevious = (res) => {
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
      coef * 0.5 + 2 + "px"
    );
  };

  // affichage
  return (
    <div className="pokemon-list-container">
      <Navigation />
      <h1 className="header-title">Liste des pokemon</h1>
      <div className="config-page">
        <CountPokemonPage pokemonPerPage={pokemonPerPage} />
        <CardSizeRange cardSize={cardSize} />
      </div>
      <NextPrevious
        existPagePrevious={existPagePrevious}
        existPageNext={existPageNext}
        previousPage={previousPage}
        nextPage={nextPage}
      />
      <PokeCard dataDetailPokemon={dataDetailPokemon} />;
    </div>
  );
};

export default Pokemon;
