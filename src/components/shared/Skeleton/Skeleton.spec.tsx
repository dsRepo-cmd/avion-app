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
      "bg-lightGrey rounded animate-pulse"
    );
  });

  it("applies custom className", () => {
    const { container } = render(<Skeleton className="custom-class" />);
    expect(container.firstChild).toHaveClass("custom-class");
  });

  it("applies aspectRatio as a style", () => {
    const { container } = render(<Skeleton style={{ aspectRatio: "16/9" }} />);
    const divElement = container.firstChild as HTMLElement;
    expect(divElement.style.aspectRatio).toBe("16/9");
  });
});
