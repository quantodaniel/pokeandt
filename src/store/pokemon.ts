import create from "zustand";
import { persist } from "zustand/middleware";

import { PokemonStore } from "src/types/store";

const persistedStore = persist<PokemonStore>(
  () => ({
    pokemons: [],
  }),
  {
    name: "pokemon-storage",
  }
);

const usePokemonStore = create<PokemonStore>()(persistedStore);

export default usePokemonStore;
