import { render, screen } from "@testing-library/react";
import { useSearchParams } from "next/navigation";
import CategoryLinks from "./CategoryLinks";
import { ProductCategory } from "@/lib/enums";

jest.mock("next/navigation", () => ({
  useSearchParams: jest.fn(),
}));

describe("CategoryLinks", () => {
  it("renders category links with correct href and classes", () => {
    (useSearchParams as jest.Mock).mockReturnValue({
      get: jest.fn().mockReturnValue(null),
    });

    render(<CategoryLinks />);

    Object.values(ProductCategory).forEach((category) => {
      const link = screen.getByText(category);
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", `/product?category=${category}`);
    });
  });

  it("applies underline class to the active category", () => {
    const activeCategory = Object.values(ProductCategory)[0];

    (useSearchParams as jest.Mock).mockReturnValue({
      get: jest.fn().mockReturnValue(activeCategory),
    });

    render(<CategoryLinks />);

    const activeLink = screen.getByText(activeCategory);
    expect(activeLink).toHaveClass("underline");
  });
});
