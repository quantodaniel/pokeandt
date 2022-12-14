import { Pokemon } from "pokenode-ts";

export type PokemonItem = {
  id: number;
  name: string;
  src: string;
  isFavorite: boolean;
  details?: {
    types: Pokemon["types"];
  };
  color?: string;
};
