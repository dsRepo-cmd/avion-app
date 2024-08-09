import { render, screen } from "@testing-library/react";
import Typography from "./Typography";

describe("Typography Component", () => {
  it("renders the correct tag", () => {
    render(<Typography tag="h1">Hello World</Typography>);
    const element = screen.getByText("Hello World");
    expect(element.tagName).toBe("H1");
  });

  it("applies the correct default classes", () => {
    render(<Typography tag="p">Hello World</Typography>);
    const element = screen.getByText("Hello World");
    expect(element).toHaveClass("text-base");
    expect(element).toHaveClass("font-primary");
    expect(element).toHaveClass("text-darkPrimary");
  });

  it("applies the correct classes for provided variants", () => {
    render(
      <Typography tag="span" size="18px" fontFamily="secondary" color="gray">
        Hello World
      </Typography>
    );
    const element = screen.getByText("Hello World");
    expect(element).toHaveClass("text-lg");
    expect(element).toHaveClass("font-second");
    expect(element).toHaveClass("text-gray");
  });

  it("merges additional class names", () => {
    render(
      <Typography tag="h2" className="additional-class">
        Hello World
      </Typography>
    );
    const element = screen.getByText("Hello World");
    expect(element).toHaveClass("additional-class");
  });

  it("renders children correctly", () => {
    render(<Typography tag="h3">Hello World</Typography>);
    const element = screen.getByText("Hello World");
    expect(element).toBeInTheDocument();
  });
});
