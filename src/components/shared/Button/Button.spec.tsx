import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";

describe("Button component", () => {
  it("renders correctly with default props", () => {
    render(<Button>Click Me</Button>);
    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass(
      "py-4 px-8 text-base bg-darkPrimary text-white"
    );
  });

  it("applies the correct background color class", () => {
    render(<Button bgColor="gray">Click Me</Button>);
    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toHaveClass("bg-lightGrey text-darkPrimary");
  });

  it("merges additional class names", () => {
    render(<Button className="extra-class">Click Me</Button>);
    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toHaveClass("extra-class");
  });

  it("handles the disabled state", () => {
    render(<Button disabled>Click Me</Button>);
    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toBeDisabled();
    expect(buttonElement).toHaveClass("disabled:opacity-70");
  });
});
