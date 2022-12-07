import { render, screen } from "@testing-library/react";
import SearchInput from "./SearchInput";

import pokemon from "src/mocks/pokemonMock";

describe("SearchInput", () => {
  it("should render correctly", () => {
    render(<SearchInput items={[pokemon]} />);
    expect(screen.getByPlaceholderText("Search")).toBeInTheDocument();
  });
});
