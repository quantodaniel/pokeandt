import CardDetailHeader from "./CardDetailHeader";
import details from "src/mocks/detailsMock";
import { render, screen } from "@testing-library/react";

describe("CardDetailHeader", () => {
  it("should render correctly", () => {
    render(<CardDetailHeader details={details} />);
    expect(screen.getByText(details.name)).toBeInTheDocument();
  });
});
