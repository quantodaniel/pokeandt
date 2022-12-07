import { useParams } from "react-router-dom";
import { RouteParams } from "src/types/request";

const EmptyState = () => {
  const { pokemonName } = useParams<RouteParams>();

  return (
    <div className="flex h-full justify-center items-center">
      <h1 className="text-5xl font-bold">Pokémon {pokemonName} not found</h1>
    </div>
  );
};

export default EmptyState;
