import create from "zustand";
import { persist } from "zustand/middleware";

import { PokemonStore } from "src/types/store";
import { Pokemon } from "pokenode-ts";
import { FastAverageColor } from "fast-average-color";

import { produce } from "immer";

const fac = new FastAverageColor();

const persistedStore = persist<PokemonStore>(
  (set, get) => ({
    pokemons: [],
    favorites: [],

    getPokemonByName: (name: string) => {
      return get().pokemons.find((pokemon) => pokemon.name === name);
    },

    toggleFavoriteById: (id: number) =>
      set(
        produce((state: PokemonStore) => {
          const pokemonIndex = state.pokemons.findIndex(
            (pokemon) => pokemon.id === id
          );

          const isFavorite = state.pokemons[pokemonIndex].isFavorite;
          state.pokemons[pokemonIndex].isFavorite = !isFavorite;
          state.favorites = state.pokemons.filter(
            (pokemon) => pokemon.isFavorite
          );
        })
      ),

    updatePokemonDetails: (details: Pokemon) =>
      set(
        produce((state: PokemonStore) => {
          const pokemonIndex = state.pokemons.findIndex(
            (pokemon) => pokemon.id === details.id
          );

          state.pokemons[pokemonIndex].details = {
            types: details.types,
          };
        })
      ),

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
