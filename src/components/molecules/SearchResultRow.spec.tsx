import { render, screen } from "@testing-library/react";
import SearchResultRow from "./SearchResultRow";

import pokemon from "src/mocks/pokemonMock";

describe("SearchResultRow", () => {
  it("should render correctly", () => {
    render(<SearchResultRow {...pokemon} />);
    expect(screen.getByText(pokemon.name)).toBeInTheDocument();
  });

  it("should render correctly with isFavorite", () => {
    render(<SearchResultRow {...pokemon} isFavorite />);
    expect(screen.getByTestId("icon-favorite")).toBeInTheDocument();
  });
});
