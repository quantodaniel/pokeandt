import { act, screen } from "@testing-library/react";
import { renderWithRouter } from "src/utils/testing";
import SearchInputByType from "./SearchInputByType";

describe("SearchInputByType", () => {
  it("should render correctly", () => {
    renderWithRouter(<SearchInputByType />);
    expect(screen.getByPlaceholderText("Search")).toBeInTheDocument();
  });

  it("should render correctly with filterType", () => {
    renderWithRouter(<SearchInputByType />);

    act(() => {
      screen.getByTestId("checkbox-filter-by-type").click();
    });

    expect(screen.getByTestId("checkbox-filter-by-type")).toBeChecked();
  });
});
