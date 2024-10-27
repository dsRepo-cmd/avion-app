import { render, screen } from "@testing-library/react";
import ListingItem from "./ListingItem";
import type { ProductListing } from "@/types/product";

const mockProduct: ProductListing = {
  id: "1",
  name: "Test Product",
  price: 29.99,
  imageSrc: "/path/to/image.jpg",
  description: "",
};

jest.mock(
  "next/image",
  () =>
    (function Image({ src, alt }: { src: string; alt: string }) {
      // eslint-disable-next-line @next/next/no-img-element
      return <img src={src} alt={alt} />;
    })
);

describe("ListingItem Component", () => {
  it("renders the product image", () => {
    render(<ListingItem product={mockProduct} />);
    const image = screen.getByAltText("Test Product");
    expect(image).toBeInTheDocument();
  });

  it("renders the product name correctly", () => {
    render(<ListingItem product={mockProduct} />);
    const productName = screen.getByRole("heading", { name: "Test Product" });
    expect(productName).toBeInTheDocument();
  });

  it("renders the product price correctly", () => {
    render(<ListingItem product={mockProduct} />);
    const productPrice = screen.getByText("£29.99");
    expect(productPrice).toBeInTheDocument();
  });

  it("renders a link to the product page", () => {
    render(<ListingItem product={mockProduct} />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/product/1");
  });
});
