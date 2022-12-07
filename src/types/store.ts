import { Pokemon } from "pokenode-ts";
import { PokemonItem } from "./pokemon";

export type PokemonStore = {
  pokemons: PokemonItem[];
  favorites: PokemonItem[];
  updatePokemonDetails: (details: Pokemon) => void;
  getPokemonByName: (name: string) => PokemonItem | undefined;
  toggleFavoriteById: (id: number) => void;
};
