import { Pokemon } from "pokenode-ts";
import { useLoaderData } from "react-router-dom";
import Button from "src/components/atoms/Button";
import ButtonFavorite from "src/components/molecules/ButtonFavorite";
import CardDetailHeader from "src/components/molecules/CardDetailHeader";
import CardDetailStats from "src/components/molecules/CardDetailStats";
import usePokemonStore from "src/store/pokemon";

const PokemonDetails = () => {
  const details = useLoaderData() as Pokemon;
  const pokemon = usePokemonStore((state) =>
    state.getPokemonByName(details.name)
  );

  return (
    <div
      className="p-10 h-full"
      style={{
        backgroundImage: `radial-gradient(circle at 100% 0%, ${pokemon.color}, rgb(248 250 252) 80%)`,
      }}
    >
      <div className="flex gap-4 mb-4">
        <ButtonFavorite id={pokemon.id} isFavorite={pokemon.isFavorite} />
        <Button>Compare</Button>
      </div>

      <div className="grid grid-cols-10">
        <CardDetailHeader details={details} />

        <div className="col-span-5 flex justify-end">
          <div className="w-full md:w-2/4">
            <img src={pokemon.src} alt={pokemon.name} width="100%" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-10">
        <CardDetailStats stats={details.stats} />
      </div>
    </div>
  );
};

export default PokemonDetails;
