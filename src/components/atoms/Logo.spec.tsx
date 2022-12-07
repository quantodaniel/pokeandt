import { screen } from "@testing-library/react";
import { renderWithRouter } from "src/utils/testing";
import Logo from "./Logo";

describe("Logo", () => {
  it("should render the correct image", () => {
    renderWithRouter(<Logo />);
    expect(screen.getByTestId("logo-image")).toHaveAttribute(
      "src",
      "/logo192.png"
    );
  });
});
