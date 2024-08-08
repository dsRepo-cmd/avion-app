import { render } from "@testing-library/react";
import Page from "./Page";

describe("Page component", () => {
  it("renders children correctly", () => {
    const { getByText } = render(<Page>Test Child</Page>);
    expect(getByText("Test Child")).toBeInTheDocument();
  });

  it("applies default styles and passed className", () => {
    const { container } = render(
      <Page className="custom-class">Test Child</Page>
    );
    const mainElement = container.querySelector("main");

    expect(mainElement).toHaveClass(
      "flex flex-col items-center justify-between w-full max-w-[1440px] custom-class"
    );
  });

  it("passes additional props to the main element", () => {
    const { container } = render(<Page id="page-id">Test Child</Page>);
    const mainElement = container.querySelector("main");

    expect(mainElement).toHaveAttribute("id", "page-id");
  });

  it("does not override the default classes when className is not provided", () => {
    const { container } = render(<Page>Test Child</Page>);
    const mainElement = container.querySelector("main");

    expect(mainElement).toHaveClass(
      "flex flex-col items-center justify-between w-full max-w-[1440px]"
    );
  });
});
