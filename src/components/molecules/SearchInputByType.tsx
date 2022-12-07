import { useState } from "react";
import { useParams } from "react-router-dom";
import useSearch from "src/hooks/useSearch";
import usePokemonStore from "src/store/pokemon";
import { RouteParams } from "src/types/request";
import SearchInput from "../atoms/SearchInput";

const SearchInputByType = () => {
  const { filterType } = useParams<RouteParams>();

  const [filterFavorites, setFilterFavorites] = useState(
    filterType === "favorites"
  );

  const pokemons = usePokemonStore((state) => state.pokemons);
  const favorites = usePokemonStore((state) => state.favorites);

  const filterData = filterFavorites ? favorites : pokemons;
  const { onSearch, onSelect } = useSearch(pokemons);

  const toggleFilterType = () => {
    setFilterFavorites((currentFilterType) => !currentFilterType);
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="flex gap-2 mx-2 text-sm">
        <input
          type="checkbox"
          name="filterType"
          checked={filterFavorites}
          onChange={toggleFilterType}
        />
        Search only by favorites
      </label>

      <SearchInput onSearch={onSearch} onSelect={onSelect} items={filterData} />
    </div>
  );
};

export default SearchInputByType;
