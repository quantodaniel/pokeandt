import { render, screen } from "@testing-library/react";
import CardDetailStats from "./CardDetailStats";

import details from "src/mocks/detailsMock";

describe("CardDetailStats", () => {
  it("should render correctly", () => {
    render(<CardDetailStats stats={details.stats} />);

    details.stats.forEach((data) => {
      expect(screen.getByText(data.stat.name)).toBeInTheDocument();
    });
  });
});
