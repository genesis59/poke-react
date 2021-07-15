/******************************************************************
	Fonction	:  Gestion et affichage des cartes pokemon
	Creation	:  GV juillet-2021
 ******************************************************************/

const pokeCard = ({ dataDetailPokemon }) => {
  const setPokemonPicture = (picture) => {
    let picturePokemon = picture.other.dream_world.front_default;

    if (picturePokemon === null) {
      picturePokemon = picture.other["official-artwork"]["front_default"];

      if (picturePokemon === null) {
        picturePokemon = picture.front_default;
      }
    }
    return picturePokemon;
  };
  const addClassType = (pokemon) => {
    let types = pokemon.data.types.map((data) => {
      return "pokemon-item-bg-" + data.type.name;
    });
    return types[0] === "pokemon-item-bg-flying" ? types[1] : types[0];
  };
  return (
    <div className="pokemon-list">
      {dataDetailPokemon.map((pokemon) => {
        return (
          <div
            key={"a" + pokemon.data.id}
            className={"pokemon-item " + addClassType(pokemon)}
          >
            <h1>{pokemon.data.name}</h1>
            <div className="pokemon-img-container">
              <img
                src={setPokemonPicture(pokemon.data.sprites)}
                alt={pokemon.data.name}
                className="pokemon-img"
              />
            </div>
            <div className="pokemon-infos">
              <div className="volume">
                <p>
                  Height: <span>{pokemon.data.height / 10}</span> mètres
                </p>
                <p>
                  Weight: <span>{pokemon.data.weight}</span> kg
                </p>
              </div>
              <div className="types">
                {"Type(s) : " +
                  pokemon.data.types.map((type) => type.type.name).join(", ")}
              </div>
              <div className="capacity">
                {pokemon.data.stats.map((stat) => {
                  return (
                    <p key={pokemon.data.id + stat.stat.name}>
                      {stat.stat.name} : <span>{stat.base_stat}</span>
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default pokeCard;
