import { Pokemon } from "pokenode-ts";
import ButtonCompare from "src/components/molecules/ButtonCompare";
import ButtonFavorite from "src/components/molecules/ButtonFavorite";
import CardDetailHeader from "src/components/molecules/CardDetailHeader";
import CardDetailStats from "src/components/molecules/CardDetailStats";
import { PokemonItem } from "src/types/pokemon";
import PokemonImage from "../atoms/PokemonImage";

type PokemonDetailsProps = {
  pokemon: PokemonItem;
  details: Pokemon;
  shrink?: boolean;
};

const PokemonDetails = (props: PokemonDetailsProps) => {
  const { pokemon, details, shrink } = props;

  const classNameImage = shrink ? "w-3/4" : "w-2/4";
  const classNameContainer = shrink ? "col-span-full" : "col-span-5";

  return (
    <div
      className="h-full p-10"
      style={{
        backgroundImage: `radial-gradient(circle at 100% 0%, ${pokemon.color}, rgb(248 250 252) 80%)`,
      }}
    >
      <div className="flex gap-4 mb-4">
        <ButtonFavorite id={pokemon.id} isFavorite={pokemon.isFavorite} />
        <ButtonCompare pokemon={pokemon} details={details} />
      </div>

      <div className="grid grid-cols-10">
        <CardDetailHeader details={details} />

        <div className="col-span-5 flex justify-end">
          <div className={classNameImage}>
            <PokemonImage {...pokemon} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-10">
        <div className={classNameContainer}>
          <CardDetailStats stats={details.stats} />
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
