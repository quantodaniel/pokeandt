import { act, render, screen } from "@testing-library/react";
import { Pokemon } from "pokenode-ts";
import usePokemonStore from "src/store/pokemon";

import ButtonCompare from "./ButtonCompare";

import pokemon from "src/mocks/pokemonMock";
import details from "src/mocks/detailsMock";

describe("ButtonCompare", () => {
  it("should show the correct text", () => {
    render(<ButtonCompare pokemon={pokemon} details={details} />);
    expect(screen.getByText("Fix to compare")).toBeInTheDocument();
  });

  it("should add to compare list", () => {
    render(<ButtonCompare pokemon={pokemon} details={details} />);

    const { getState } = usePokemonStore;
    expect(getState().compare).toBeUndefined();

    act(() => {
      screen.getByText("Fix to compare").click();
    });

    expect(getState().compare).toEqual({ pokemon, details });
  });
});
