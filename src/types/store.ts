import { Pokemon } from "pokenode-ts";
import { PokemonItem } from "./pokemon";

export type PokemonStore = {
  pokemons: PokemonItem[];
  favorites: PokemonItem[];
  compare?: {
    pokemon: PokemonItem;
    details: Pokemon;
  };
  updatePokemonDetails: (details: Pokemon) => void;
  getPokemonByName: (name: string) => PokemonItem | undefined;
  toggleFavoriteById: (id: number) => void;
  updatePokemonColor: () => Promise<void>;
  addToCompare: (pokemon: PokemonItem, details: Pokemon) => void;
  removeFromCompare: () => void;
};
