import { Pokemon } from "pokenode-ts";
import usePokemonStore from "src/store/pokemon";
import { PokemonItem } from "src/types/pokemon";
import Button from "../atoms/Button";

type ButtonCompareProps = {
  pokemon: PokemonItem;
  details: Pokemon;
};

const ButtonCompare = (props: ButtonCompareProps) => {
  const { pokemon, details } = props;

  const compareData = usePokemonStore((state) => state.compare);
  const isComparing = compareData && compareData.pokemon.id === pokemon.id;

  const addToCompare = usePokemonStore((state) => state.addToCompare);
  const removeFromCompare = usePokemonStore((state) => state.removeFromCompare);

  const toggleCompare = () => {
    if (isComparing) {
      return removeFromCompare();
    }
    return addToCompare(pokemon, details);
  };

  if (isComparing) {
    return <Button onClick={toggleCompare}>Remove from compare</Button>;
  }
  return <Button onClick={toggleCompare}>Fix to compare</Button>;
};

export default ButtonCompare;
