import { useParams } from "react-router-dom";
import { RouteParams } from "src/types/request";

const EmptyState = () => {
  const { pokemonName } = useParams<RouteParams>();

    return (
      <div className="flex h-full justify-center items-center p-10">
        <h1 className="text-5xl font-bold text-center">
          {pokemonName
            ? `Pokémon ${pokemonName} not found`
            : "Select or find a Pokémon for more details"}
        </h1>
      </div>
    );

};

export default EmptyState;
