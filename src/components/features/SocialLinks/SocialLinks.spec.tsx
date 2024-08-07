import React from "react";
import { render, screen } from "@testing-library/react";
import SocialLinks from "./SocialLinks";

jest.mock("@/components/shared/AppLink/AppLink", () => {
  return function MockAppLink({
    children,
    title,
    href,
  }: {
    children: React.ReactNode;
    title: string;
    href: string;
  }) {
    return (
      <a href={href} title={title}>
        {children}
      </a>
    );
  };
});

jest.mock("@/components/icons/LinkedInIcon", () => () => "LinkedInIcon");
jest.mock("@/components/icons/FacebookIcon", () => () => "FacebookIcon");
jest.mock("@/components/icons/InstagramIcon", () => () => "InstagramIcon");
jest.mock("@/components/icons/SkypeIcon", () => () => "SkypeIcon");
jest.mock("@/components/icons/TwitterIcon", () => () => "TwitterIcon");
jest.mock("@/components/icons/PinterestIcon", () => () => "PinterestIcon");

describe("SocialLinks Component", () => {
  test("renders without crashing", () => {
    render(<SocialLinks />);
  });

  test("renders correct number of social links", () => {
    render(<SocialLinks />);
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(6);
  });

  test("renders all social links with correct titles", () => {
    render(<SocialLinks />);
    expect(screen.getByTitle("Linkedin")).toBeInTheDocument();
    expect(screen.getByTitle("Facebook")).toBeInTheDocument();
    expect(screen.getByTitle("Instagram")).toBeInTheDocument();
    expect(screen.getByTitle("Skype")).toBeInTheDocument();
    expect(screen.getByTitle("Twitter")).toBeInTheDocument();
    expect(screen.getByTitle("Pinterest")).toBeInTheDocument();
  });

  test("renders links with correct href attributes", () => {
    render(<SocialLinks />);
    const links = screen.getAllByRole("link");
    links.forEach((link) => {
      expect(link).toHaveAttribute("href", "#");
    });
  });

  test("renders links with correct icon components", () => {
    render(<SocialLinks />);
    expect(screen.getByText("LinkedInIcon")).toBeInTheDocument();
    expect(screen.getByText("FacebookIcon")).toBeInTheDocument();
    expect(screen.getByText("InstagramIcon")).toBeInTheDocument();
    expect(screen.getByText("SkypeIcon")).toBeInTheDocument();
    expect(screen.getByText("TwitterIcon")).toBeInTheDocument();
    expect(screen.getByText("PinterestIcon")).toBeInTheDocument();
  });

  test("applies correct CSS classes to the container", () => {
    const { container } = render(<SocialLinks />);
    expect(container.firstChild).toHaveClass(
      "flex",
      "items-center",
      "justify-center",
      "gap-6",
      "lg:hidden"
    );
  });
});
