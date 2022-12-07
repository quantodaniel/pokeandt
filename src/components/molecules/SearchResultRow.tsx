import { FaBookmark } from "react-icons/fa";
import { PokemonItem } from "src/types/pokemon";

const SearchResultRow = (props: PokemonItem) => {
  const { name, src, isFavorite, color } = props;

  return (
    <div
      className="flex items-center cursor-pointer gap-2 rounded-lg mr-3"
      style={{
        backgroundImage: `linear-gradient(45deg, ${color}, white 25%)`,
      }}
    >
      <div className="h-12 w-12">
        <img src={src} alt={name} />
      </div>
      <div className="flex flex-1">
        <h1 className="text-lg capitalize">{name}</h1>
      </div>
      <div className="mx-2">
        {isFavorite && <FaBookmark data-testid="icon-favorite" />}
      </div>
    </div>
  );
};

export default SearchResultRow;
