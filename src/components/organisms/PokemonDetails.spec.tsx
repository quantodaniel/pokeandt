import { screen } from "@testing-library/react";
import PokemonDetails from "./PokemonDetails";

import pokemon from "src/mocks/pokemonMock";
import details from "src/mocks/detailsMock";

import { renderWithRouter } from "src/utils/testing";

describe("PokemonDetails", () => {
  it("should render correctly", () => {
    renderWithRouter(<PokemonDetails pokemon={pokemon} details={details} />);
    expect(screen.getByText(pokemon.name)).toBeInTheDocument();
  });

  it("should render correctly with shrink", () => {
    renderWithRouter(
      <PokemonDetails pokemon={pokemon} details={details} shrink />
    );
    expect(screen.getByText(pokemon.name)).toBeInTheDocument();
  });
});
