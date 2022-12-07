import { PokemonItem } from "src/types/pokemon";
import { PokemonResponse } from "src/types/response";

export const getRandomItem = <T>(itemList: T[]) => {
  const randomIndex = Math.floor(Math.random() * itemList.length);
  return itemList[randomIndex];
};

export const removeTrailingSlash = (url: string) => {
  return url.replace(/\/$/, "");
};

export const extractIdFromUrl = (url: string) => {
  return Number(removeTrailingSlash(url).split("/").pop());
};

export const getPokemonImageById = (pokemonId: number) => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
};

export const formatPokemonList = (
  pokemonList: PokemonResponse[]
): PokemonItem[] => {
  return pokemonList.map((pokemon) => {
    const pokemonId = extractIdFromUrl(pokemon.url);

    return {
      ...pokemon,
      id: pokemonId,
      src: getPokemonImageById(pokemonId),
      isFavorite: false,
    };
  });
};
