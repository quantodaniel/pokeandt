import { Pokemon } from "pokenode-ts";
import { useLoaderData } from "react-router-dom";
import PokemonDetails from "src/components/organisms/PokemonDetails";
import usePokemonStore from "src/store/pokemon";

const PageDetails = () => {
  const details = useLoaderData() as Pokemon;
  const pokemon = usePokemonStore((state) =>
    state.getPokemonByName(details.name)
  );

  const compareData = usePokemonStore((state) => state.compare);
  const showCompare = compareData && compareData.pokemon.id !== pokemon.id;

  if (showCompare) {
    return (
      <div className="h-full grid grid-cols-10">
        <div className="col-span-5">
          <PokemonDetails {...compareData} shrink />
        </div>
        <div className="col-span-5">
          <PokemonDetails pokemon={pokemon} details={details} shrink />
        </div>
      </div>
    );
  }

  return (
    <div className="h-full">
      <PokemonDetails pokemon={pokemon} details={details} />
    </div>
  );
};

export default PageDetails;
