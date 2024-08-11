import { render } from "@testing-library/react";
import Skeleton from "./Skeleton";

describe("Skeleton component", () => {
  it("renders without crashing", () => {
    const { container } = render(<Skeleton />);
    expect(container).toBeInTheDocument();
  });

  it("applies default classes", () => {
    const { container } = render(<Skeleton />);
    expect(container.firstChild).toHaveClass(
      "max-w-full shadow-custom bg-borderGrey overflow-hidden animate-pulse"
    );
  });

  it("applies custom className", () => {
    const { container } = render(<Skeleton className="custom-class" />);
    expect(container.firstChild).toHaveClass("custom-class");
  });

  it("applies aspectRatio as a style", () => {
    const { container } = render(<Skeleton aspectRatio="16/9" />);
    const divElement = container.firstChild as HTMLElement;
    expect(divElement.style.aspectRatio).toBe("16/9");
  });
});
