const pokeCard = ({ dataDetailPokemon }) => {
  const addClassType = (pokemon) => {
    let types = pokemon.data.types.map((data) => {
      return "pokemon-item-bg-" + data.type.name;
    });
    return types[0];
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
                src={pokemon.data.sprites.other.dream_world.front_default}
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
                {"Type(s) : " + pokemon.data.types.map((type) => type.type.name).join(", ")}
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
