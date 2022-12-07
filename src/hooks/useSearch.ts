import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PokemonItem } from "src/types/pokemon";
import { getRandomItem } from "src/utils";

const useSearch = (pokemons: PokemonItem[]) => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");

  const onSearch = (value: string) => {
    setSearchValue(value);
  };

  const onSearchFavorite = () => {
    navigate("/favorites/");
  };

  const onSearchByLucky = () => {
    const randomPokemon = getRandomItem(pokemons);
    navigate(`/search/${randomPokemon.name}`);
  };

  const onSearchByText = () => {
    if (!searchValue) return onSearchByLucky();
    navigate(`/search/${searchValue.toLocaleLowerCase()}`);
  };

  const onSelect = (pokemon: PokemonItem) => {
    setSearchValue(pokemon.name);
    navigate(`/search/${pokemon.name.toLocaleLowerCase()}`);
  };

  return {
    onSearch,
    onSearchFavorite,
    onSearchByLucky,
    onSearchByText,
    onSelect,
  };
};

export default useSearch;
