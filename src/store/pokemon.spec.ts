import usePokemonStore from "./pokemon";

import pokemon from "src/mocks/pokemonMock";
import details from "src/mocks/detailsMock";

describe("PokemonStore", () => {
  const store = usePokemonStore;

  beforeEach(() => {
    store.setState({ pokemons: [pokemon] });
  });

  it("should add pokemon to compare", () => {
    store.getState().addToCompare(pokemon, details);
    expect(store.getState().compare).toEqual({ pokemon, details });
  });

  it("should remove pokemon from compare", () => {
    store.getState().addToCompare(pokemon, details);
    store.getState().removeFromCompare();
    expect(store.getState().compare).toBeUndefined();
  });

  it("should add pokemon to favorites", () => {
    store.getState().toggleFavoriteById(pokemon.id);
    expect(store.getState().favorites.at(0)).toEqual({
      ...pokemon,
      isFavorite: true,
    });
  });

  it("should remove pokemon from favorites", () => {
    store.getState().toggleFavoriteById(pokemon.id);
    store.getState().toggleFavoriteById(pokemon.id);
    expect(store.getState().favorites.length).toEqual(0);
  });
});
