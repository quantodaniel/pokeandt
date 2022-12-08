import { PokemonItem } from "src/types/pokemon";
import { updatePokemonColor } from "src/utils";

const PokemonImage = (pokemon: PokemonItem) => {
  updatePokemonColor(pokemon);
  return (
    <img
      src={pokemon.src}
      alt={pokemon.name}
      width="100%"
      data-testid="pokemon-image"
    />
  );
};

export default PokemonImage;
