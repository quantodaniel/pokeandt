import create from "zustand";
import { persist } from "zustand/middleware";

import { PokemonStore } from "src/types/store";
import { Pokemon } from "pokenode-ts";
import { FastAverageColor } from "fast-average-color";

const fac = new FastAverageColor();

const persistedStore = persist<PokemonStore>(
  (set, get) => ({
    pokemons: [],
    favorites: [],
    getPokemonByName: (name: string) => {
      return get().pokemons.find((pokemon) => pokemon.name === name);
    },
    toggleFavoriteById: (id: number) => {
      const newPokemons = [...get().pokemons];
      const pokemonIndex = newPokemons.findIndex(
        (pokemon) => pokemon.id === id
      );

      const isFavorite = newPokemons[pokemonIndex].isFavorite;
      newPokemons[pokemonIndex].isFavorite = !isFavorite;

      const favorites = newPokemons.filter((pokemon) => pokemon.isFavorite);

      set({ pokemons: newPokemons, favorites });
    },
    updatePokemonDetails: (details: Pokemon) => {
      const newPokemons = [...get().pokemons];
      const pokemonIndex = newPokemons.findIndex(
        (pokemon) => pokemon.id === details.id
      );

      newPokemons[pokemonIndex].details = {
        types: details.types,
      };

      set({ pokemons: newPokemons });
    },
    updatePokemonColor: async () => {
      const newPokemons = [...get().pokemons];

      const promises = newPokemons.map(async (pokemon) => {
        try {
          const colors = await fac.getColorAsync(pokemon.src);
          return { ...pokemon, color: colors.hex };
        } catch (error) {
          return { ...pokemon, color: "rgb(148 163 184)" };
        }
      });

      const pokemonsWithColor = await Promise.all(promises);
      set({ pokemons: pokemonsWithColor });
    },
  }),
  {
    name: "pokemon-storage",
  }
);

const usePokemonStore = create<PokemonStore>()(persistedStore);

export default usePokemonStore;
