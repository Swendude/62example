const axios = require("axios");

const getPokemonNames = async () => {
  const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
  const pokemons = response.data.results;
  const pokemonNames = pokemons.map((pokemon) => pokemon.name);
  console.log(pokemonNames.join(", "));
};

getPokemonNames();
