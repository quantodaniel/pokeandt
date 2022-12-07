import { PokemonItem } from "src/types/pokemon";

const SearchResultRow = (item: PokemonItem) => {
  return (
    <div className="flex items-center cursor-pointer gap-2">
      <div className="h-12 w-12">
        <img src={item.src} alt={item.name} />
      </div>
      <div>
        <h1 className="text-xl capitalize">{item.name}</h1>
      </div>
    </div>
  );
};

export default SearchResultRow;
