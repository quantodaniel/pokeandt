import Button from "src/components/atoms/Button";
import SearchInput from "src/components/atoms/SearchInput";
import useSearch from "src/hooks/useSearch";
import usePokemonStore from "src/store/pokemon";

const HomeSearch = () => {
  const pokemons = usePokemonStore((state) => state.pokemons);
  const {
    onSearch,
    onSearchByText,
    onSearchByLucky,
    onSearchFavorite,
    onSelect,
  } = useSearch(pokemons);

  return (
    <div className="h-2/4 w-2/4 flex flex-col items-center gap-6">
      <div className="w-full">
        <SearchInput onSearch={onSearch} onSelect={onSelect} items={pokemons} />
      </div>

      <div className="flex justify-between w-96">
        <Button onClick={onSearchByText}>Search</Button>
        <Button onClick={onSearchByLucky}>I'm Feeling Lucky</Button>
        <Button onClick={onSearchFavorite}>My Favorites</Button>
      </div>
    </div>
  );
};

export default HomeSearch;
