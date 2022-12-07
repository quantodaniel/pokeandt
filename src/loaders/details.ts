import { LoaderFunctionArgs } from "react-router-dom";
import PokemonService from "src/service/PokemonService";
import usePokemonStore from "src/store/pokemon";

type RequestProps = {
  pokemonName: string;
};

const loadDataForDetails = async (args: LoaderFunctionArgs) => {
  const { pokemonName } = args.params as RequestProps;

  const { getState } = usePokemonStore;
  const pokemon = getState().getPokemonByName(pokemonName);
  if (!pokemon) {
    throw new Response("Not Found", { status: 404 });
  }

  const pokemonService = new PokemonService();
  const details = await pokemonService.getPokemonByName(pokemon.name);

  if (!pokemon?.details) {
    getState().updatePokemonDetails(details);
  }

  const pokemonWithDetails = getState().getPokemonByName(pokemonName);
  return pokemonWithDetails;
};

export default loadDataForDetails;
