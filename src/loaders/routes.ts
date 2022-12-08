import PokemonService from "src/service/PokemonService";
import usePokemonStore from "src/store/pokemon";

const loadDataForRoutes = async () => {
  const { getState, setState } = usePokemonStore;

  if (getState().pokemons.length === 0) {
    const pokemonService = new PokemonService();
    const pokemons = await pokemonService.listPokemons();
    setState({ pokemons });
  }

  return getState().pokemons;
};

export default loadDataForRoutes;
