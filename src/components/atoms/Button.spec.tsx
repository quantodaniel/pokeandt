import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  it("should show the correct text", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("should click the button", () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Click me</Button>);
    screen.getByText("Click me").click();
    expect(onClick).toHaveBeenCalled();
  });
});
