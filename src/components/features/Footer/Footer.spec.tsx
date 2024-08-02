import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "./Footer";
import { menu, categories, ourCompany, joinUs, copyright } from "./data";

jest.mock("@/components/shared/LinksList/LinksList", () => {
  return function MockLinksList({
    title,
    links,
  }: {
    title: string;
    links: any[];
  }) {
    return (
      <div data-testid={`links-list-${title.toLowerCase()}`}>
        <h3>{title}</h3>
        <ul>
          {links.map((link) => (
            <li key={link.id}>{link.title}</li>
          ))}
        </ul>
      </div>
    );
  };
});

jest.mock("../../shared/EmailSignUpForm/EmailSignUpForm", () => {
  return function MockEmailSignUpForm() {
    return <div data-testid="email-signup-form">Email Sign Up Form</div>;
  };
});

jest.mock("../SocialLinks/SocialLinks", () => {
  return function MockSocialLinks() {
    return <div data-testid="social-links">Social Links</div>;
  };
});

describe("Footer Component", () => {
  beforeEach(() => {
    render(<Footer />);
  });

  test("renders the menu links list", () => {
    const menuList = screen.getByTestId("links-list-menu");
    expect(menuList).toBeInTheDocument();
    expect(menuList).toHaveTextContent(menu.title);
    menu.links.forEach((link) => {
      expect(menuList).toHaveTextContent(link.title);
    });
  });

  test("renders the categories links list", () => {
    const categoriesList = screen.getByTestId("links-list-categories");
    expect(categoriesList).toBeInTheDocument();
    expect(categoriesList).toHaveTextContent(categories.title);
    categories.links.forEach((link) => {
      expect(categoriesList).toHaveTextContent(link.title);
    });
  });

  test("renders the our company links list", () => {
    const ourCompanyList = screen.getByTestId("links-list-our company");
    expect(ourCompanyList).toBeInTheDocument();
    expect(ourCompanyList).toHaveTextContent(ourCompany.title);
    ourCompany.links.forEach((link) => {
      expect(ourCompanyList).toHaveTextContent(link.title);
    });
  });

  test("renders the join us section", () => {
    expect(screen.getByText(joinUs)).toBeInTheDocument();
  });

  test("renders the email sign up form", () => {
    expect(screen.getByTestId("email-signup-form")).toBeInTheDocument();
  });

  test("renders the copyright text", () => {
    expect(screen.getByText(copyright)).toBeInTheDocument();
  });

  test("renders the social links", () => {
    expect(screen.getByTestId("social-links")).toBeInTheDocument();
  });
});
