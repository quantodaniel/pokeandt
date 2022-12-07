import { Link } from "react-router-dom";
import { PokemonItem } from "src/types/pokemon";
import ButtonFavorite from "./ButtonFavorite";

const SidebarCard = (props: PokemonItem) => {
  const { id, name, src, color, details, isFavorite } = props;
  const { types } = details;

  return (
    <Link
      to={`/search/${name}`}
      className="drop-shadow w-full px-2 py-1 rounded flex items-center gap-4 -z-1 relative hover:text-green-600"
      style={{
        backgroundImage: `linear-gradient(45deg, ${color}, white 30%)`,
      }}
    >
      <div className="h-12 w-12">
        <img src={src} alt={name} />
      </div>

      <div>
        <h1 className="text-lg capitalize">{name}</h1>
        <div className="-mt-2">
          {types?.map((data) => (
            <span
              key={`${name}_${data.type.name}`}
              className="mr-2 text-sm text-gray-600"
            >
              {data.type.name}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute right-3 top-3">
        <ButtonFavorite id={id} isFavorite={isFavorite} icon />
      </div>
    </Link>
  );
};

export default SidebarCard;
