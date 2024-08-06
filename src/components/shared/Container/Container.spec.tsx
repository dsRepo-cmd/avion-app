import { render, screen } from "@testing-library/react";
import Container from "./Container";

describe("Container Component", () => {
  test("renders children correctly", () => {
    render(<Container>Test Content</Container>);
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  test("applies default variant class", () => {
    const { container } = render(<Container>Test Content</Container>);
    expect(container.firstChild).toHaveClass("bg-white");
  });

  test("applies dark variant class when specified", () => {
    const { container } = render(
      <Container bgColor="dark">Test Content</Container>
    );
    expect(container.firstChild).toHaveClass("bg-darkPrimary");
  });

  test("applies light variant class when specified", () => {
    const { container } = render(
      <Container bgColor="light">Test Content</Container>
    );
    expect(container.firstChild).toHaveClass("bg-lightGrey");
  });

  test("applies additional className when provided", () => {
    const { container } = render(
      <Container className="extra-class">Test Content</Container>
    );
    expect(container.firstChild).toHaveClass("extra-class");
  });

  test("passes through additional props", () => {
    render(<Container data-testid="custom-container">Test Content</Container>);
    expect(screen.getByTestId("custom-container")).toBeInTheDocument();
  });

  test("applies all default classes", () => {
    const { container } = render(<Container>Test Content</Container>);
    expect(container.firstChild).toHaveClass(
      "flex",
      "flex-col",
      "justify-between",
      "p-14",
      "w-full",
      "h-full",
      "lg:px-6",
      "lg:py-12"
    );
  });
});
