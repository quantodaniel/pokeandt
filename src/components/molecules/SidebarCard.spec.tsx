import { screen } from "@testing-library/react";
import SidebarCard from "./SidebarCard";

import pokemon from "src/mocks/pokemonMock";
import details from "src/mocks/detailsMock";
import { renderWithRouter } from "src/utils/testing";

describe("SidebarCard", () => {
  it("should render correctly", () => {
    renderWithRouter(<SidebarCard {...pokemon} details={details} />);
    expect(screen.getByText(pokemon.name)).toBeInTheDocument();
  });

  it("should render correctly with no details", () => {
    renderWithRouter(<SidebarCard {...pokemon} />);
    expect(screen.getByText(pokemon.name)).toBeInTheDocument();
  });

  it("should render the correct image", () => {
    renderWithRouter(<SidebarCard {...pokemon} details={details} />);
    expect(screen.getByTestId("card-pokemon-image")).toHaveAttribute(
      "src",
      pokemon.src
    );
  });
});
