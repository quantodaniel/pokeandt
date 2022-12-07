import { act, render, screen } from "@testing-library/react";
import usePokemonStore from "src/store/pokemon";

import pokemon from "src/mocks/pokemonMock";
import ButtonFavorite from "./ButtonFavorite";

describe("ButtonFavorite", () => {
  it("should show the correct text", () => {
    render(<ButtonFavorite id={pokemon.id} />);
    expect(screen.getByText("Add to favorites")).toBeInTheDocument();
  });

  it("should show the correct icon", () => {
    render(<ButtonFavorite id={pokemon.id} icon />);
    expect(screen.getByTestId("icon-bookmark")).toBeInTheDocument();
  });

  it("should show the correct icon when isFavorite", () => {
    render(<ButtonFavorite id={pokemon.id} isFavorite icon />);
    expect(screen.getByTestId("icon-bookmarked")).toBeInTheDocument();
  });

  it("should add to favorite list", () => {
    render(<ButtonFavorite id={pokemon.id} />);
    const { getState, setState } = usePokemonStore;

    act(() => {
      setState({ pokemons: [pokemon] });
    });

    const currentPokemon = getState().getPokemonByName(pokemon.name);
    expect(currentPokemon.isFavorite).toBeFalsy();

    act(() => {
      screen.getByText("Add to favorites").click();
    });

    const newPokemonData = getState().getPokemonByName(pokemon.name);
    expect(newPokemonData.isFavorite).toBeTruthy();
  });
});
