import create from "zustand";
import { persist } from "zustand/middleware";

import { PokemonStore } from "src/types/store";
import { Pokemon } from "pokenode-ts";

import { produce } from "immer";
import { PokemonItem } from "src/types/pokemon";

const persistedStore = persist<PokemonStore>(
  (set, get) => ({
    pokemons: [],
    favorites: [],
    compare: undefined,

    getPokemonByName: (name: string) => {
      return get().pokemons.find((pokemon) => pokemon.name === name);
    },

    addToCompare: (pokemon: PokemonItem, details: Pokemon) =>
      set(
        produce((state: PokemonStore) => {
          state.compare = { pokemon, details };
        })
      ),

    removeFromCompare: () =>
      set(
        produce((state: PokemonStore) => {
          state.compare = undefined;
        })
      ),

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

          if (state.compare?.pokemon.id === id) {
            state.compare.pokemon.isFavorite = !isFavorite;
          }
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

    updatePokemonColor: async (pokemon: PokemonItem, color: string) =>
      set(
        produce((state: PokemonStore) => {
          const pokemonIndex = state.pokemons.findIndex(
            (pokemonItem) => pokemonItem.id === pokemon.id
          );
          state.pokemons[pokemonIndex].color = color;
        })
      ),
  }),
  {
    name: "pokemon-storage",
  }
);

const usePokemonStore = create<PokemonStore>()(persistedStore);

export default usePokemonStore;
