import { useLoaderData } from "react-router-dom";
import ButtonFavorite from "src/components/molecules/ButtonFavorite";
import { PokemonItem } from "src/types/pokemon";

const Pokemon = () => {
  const pokemon = useLoaderData() as PokemonItem;

  return (
    <div className="p-4">
      <ButtonFavorite id={pokemon.id} icon isFavorite={pokemon.isFavorite} />
      <h1>Pokemon detail: {JSON.stringify(pokemon, null, 2)}</h1>
    </div>
  );
};

export default Pokemon;
