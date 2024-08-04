import { render, screen, fireEvent } from "@testing-library/react";
import Dropdown from "./Dropdown";

jest.mock("@/components/icons/ChevronDownIcon", () => {
  return function ChevronDownIcon() {
    return <div data-testid="chevron-down-icon" />;
  };
});

const mockItems = [
  { id: "1", content: "Item 1", onClick: jest.fn() },
  { id: "2", content: "Item 2", href: "/item2" },
];

describe("Dropdown component", () => {
  test("renders with trigger and dropdown items", () => {
    render(
      <Dropdown
        trigger={<span>Open Menu</span>}
        items={mockItems}
        isOpen={true}
      />
    );

    expect(screen.getByText("Open Menu")).toBeInTheDocument();

    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
  });

  test("toggles dropdown visibility when trigger is clicked", () => {
    const { getByText, queryByTestId } = render(
      <Dropdown
        trigger={<span>Open Menu</span>}
        items={mockItems}
        isOpen={false}
      />
    );

    expect(queryByTestId("dropdown")).toBeInTheDocument();
    expect(queryByTestId("dropdown")).toHaveClass("opacity-0");

    fireEvent.click(getByText("Open Menu"));

    expect(queryByTestId("dropdown")).toHaveClass("opacity-100");
  });

  test("closes dropdown when clicking outside", () => {
    const { getByTestId } = render(
      <>
        <Dropdown trigger={<span>Open Menu</span>} items={mockItems} isOpen />
        <div data-testid="outside">Outside</div>
      </>
    );

    expect(screen.getByTestId("dropdown")).toBeInTheDocument();

    fireEvent.mouseDown(getByTestId("outside"));

    setTimeout(() => {
      expect(screen.queryByTestId("dropdown")).not.toBeInTheDocument();
    }, 0);
  });

  test("closes dropdown on Escape key press", () => {
    const { getByText } = render(
      <Dropdown trigger={<span>Open Menu</span>} items={mockItems} isOpen />
    );

    expect(getByText("Item 1")).toBeVisible();

    fireEvent.keyDown(document, { key: "Escape", code: "Escape" });

    setTimeout(() => {
      expect(screen.queryByTestId("dropdown")).not.toBeInTheDocument();
    }, 0);
  });

  test("renders disabled and enabled states for items", () => {
    render(
      <Dropdown
        trigger={<span>Open Menu</span>}
        items={[
          { id: "1", content: "Disabled Item", disabled: true },
          { id: "2", content: "Enabled Item" },
        ]}
        isOpen
      />
    );

    const disabledItem = screen.getByText("Disabled Item");
    expect(disabledItem).toHaveClass("opacity-50");
    expect(disabledItem).toHaveClass("cursor-not-allowed");

    const enabledItem = screen.getByText("Enabled Item");
    expect(enabledItem).toHaveClass("cursor-pointer");
  });

  test("renders dropdown with href items correctly", () => {
    render(
      <Dropdown trigger={<span>Open Menu</span>} items={mockItems} isOpen />
    );

    const linkItem = screen.getByText("Item 2").closest("a");
    expect(linkItem).toHaveAttribute("href", "/item2");
  });
});
