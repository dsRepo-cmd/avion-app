import React from "react";
import { render, screen } from "@testing-library/react";
import LinksList from "./LinksList";
import { Link } from "@/types/types";

describe("LinksList component", () => {
  const mockLinks: Link[] = [
    { id: "1", title: "Home", href: "/" },
    { id: "2", title: "About", href: "/about" },
    { id: "3", title: "Contact", href: "/contact" },
  ];

  test("renders the title correctly", () => {
    render(<LinksList links={mockLinks} title="Test Title" />);

    const titleElement = screen.getByText("Test Title");
    expect(titleElement).toBeInTheDocument();
  });

  test("renders the correct number of links", () => {
    render(<LinksList links={mockLinks} title="Test Title" />);

    const linkElements = screen.getAllByRole("link");
    expect(linkElements).toHaveLength(mockLinks.length);
  });

  test("renders links with correct href and text", () => {
    render(<LinksList links={mockLinks} title="Test Title" />);

    mockLinks.forEach((link) => {
      const linkElement = screen.getByText(link.title);
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute("href", link.href);
    });
  });
});
