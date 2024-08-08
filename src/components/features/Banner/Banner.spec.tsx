import { render, screen, fireEvent } from "@testing-library/react";
import Banner from "./Banner";

jest.mock("@/components/icons/DeliveryIcon", () => {
  return function MockDeliveryIcon() {
    return <div data-testid="mock-delivery-icon" />;
  };
});

jest.mock("@/components/icons/XIcon", () => {
  return function MockXIcon() {
    return <div data-testid="mock-x-icon" />;
  };
});

describe("Banner Component", () => {
  beforeEach(() => {
    // Clear sessionStorage before each test
    sessionStorage.clear();
  });

  it("renders the banner when not closed", () => {
    render(<Banner />);
    expect(
      screen.getByText(
        /Free delivery on all orders over £50 with code easter checkout/
      )
    ).toBeInTheDocument();
    expect(screen.getByTestId("mock-delivery-icon")).toBeInTheDocument();
    expect(screen.getByTestId("mock-x-icon")).toBeInTheDocument();
  });

  it("does not render the banner when previously closed", () => {
    sessionStorage.setItem("isBannerClosed", "true");
    render(<Banner />);
    expect(
      screen.queryByText(
        /Free delivery on all orders over £50 with code easter checkout/
      )
    ).not.toBeInTheDocument();
  });

  it("closes the banner when close button is clicked", () => {
    render(<Banner />);
    const closeButton = screen.getByTitle("close");
    fireEvent.click(closeButton);
    expect(
      screen.queryByText(
        /Free delivery on all orders over £50 with code easter checkout/
      )
    ).not.toBeInTheDocument();
  });

  it("sets sessionStorage when banner is closed", () => {
    render(<Banner />);
    const closeButton = screen.getByTitle("close");
    fireEvent.click(closeButton);
    expect(sessionStorage.getItem("isBannerClosed")).toBe("true");
  });

  it("applies correct CSS classes", () => {
    render(<Banner />);
    const textElement = screen.getByText(
      /Free delivery on all orders over £50 with code easter checkout/
    );
    const innerDiv = textElement.closest("div");
    const bannerDiv = innerDiv?.parentElement;

    expect(bannerDiv).not.toBeNull();
    expect(innerDiv).not.toBeNull();

    if (bannerDiv) {
      expect(bannerDiv).toHaveClass(
        "flex justify-between bg-darkPrimary items-center w-full text-white p-2 z-50"
      );
    }

    if (innerDiv) {
      expect(innerDiv).toHaveClass(
        "flex grow gap-6 self-center justify-center"
      );
    }
  });

  it("renders Typography component with correct props", () => {
    render(<Banner />);
    const typographyElement = screen.getByText(
      /Free delivery on all orders over £50 with code easter checkout/
    );

    expect(typographyElement).toHaveClass("text-white");
    expect(typographyElement).toHaveClass("text-sm");
    expect(typographyElement).toHaveClass("font-primary");
    expect(typographyElement.tagName.toLowerCase()).toBe("span");
  });
});
