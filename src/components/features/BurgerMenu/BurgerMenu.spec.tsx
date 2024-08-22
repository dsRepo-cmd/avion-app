import { render, screen, fireEvent } from "@testing-library/react";
import BurgerMenu from "./BurgerMenu";

jest.mock("@/components/shared/Portal/Portal", () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="portal-mock">{children}</div>
  ),
}));

jest.mock("@/components/shared/CategoryLinks/CategoryLinks", () => ({
  __esModule: true,
  default: () => <div data-testid="category-links-mock">Category Links</div>,
}));

jest.mock("next/navigation", () => ({
  useSearchParams: () => ({
    get: jest.fn(),
  }),
}));

describe("BurgerMenu", () => {
  it("renders the burger menu button", () => {
    render(<BurgerMenu />);
    const button = screen.getByRole("button", { name: /navigation/i });
    expect(button).toBeInTheDocument();
  });

  it("toggles the menu when the button is clicked", () => {
    render(<BurgerMenu />);
    const button = screen.getByRole("button", { name: /navigation/i });
    const menu = screen.getByTestId("portal-mock").firstChild as HTMLElement;

    expect(menu).toHaveClass("top-[-800px]");

    fireEvent.click(button);
    expect(menu).toHaveClass("top-[73px]");

    fireEvent.click(button);
    expect(menu).toHaveClass("top-[-800px]");
  });

  it("closes the menu when clicking outside", () => {
    render(<BurgerMenu />);
    const button = screen.getByRole("button", { name: /navigation/i });
    const menu = screen.getByTestId("portal-mock").firstChild as HTMLElement;

    fireEvent.click(button);
    expect(menu).toHaveClass("top-[73px]");

    fireEvent.mouseDown(document.body);
    expect(menu).toHaveClass("top-[-800px]");
  });

  it("closes the menu when pressing Escape key", () => {
    render(<BurgerMenu />);
    const button = screen.getByRole("button", { name: /navigation/i });
    const menu = screen.getByTestId("portal-mock").firstChild as HTMLElement;

    fireEvent.click(button);
    expect(menu).toHaveClass("top-[73px]");

    fireEvent.keyDown(document, { key: "Escape" });
    expect(menu).toHaveClass("top-[-800px]");
  });

  it("does not close the menu when clicking inside the menu", () => {
    render(<BurgerMenu />);
    const button = screen.getByRole("button", { name: /navigation/i });
    const menu = screen.getByTestId("portal-mock").firstChild as HTMLElement;

    fireEvent.click(button);
    expect(menu).toHaveClass("top-[73px]");

    fireEvent.mouseDown(menu);
    expect(menu).toHaveClass("top-[73px]");
  });

  it("renders CategoryLinks component when menu is open", () => {
    render(<BurgerMenu />);
    const button = screen.getByRole("button", { name: /navigation/i });

    fireEvent.click(button);

    const categoryLinks = screen.getByTestId("category-links-mock");
    expect(categoryLinks).toBeInTheDocument();
  });
});
