import { render, screen } from "@testing-library/react";
import JoinUs from "./JoinUs";

jest.mock("@/components/shared/Container/Container", () => {
  const MockContainer: React.FC<{
    children: React.ReactNode;
    bgColor: string;
  }> = ({ children, bgColor }) => (
    <div data-testid="mock-container" data-bg-color={bgColor}>
      {children}
    </div>
  );
  MockContainer.displayName = "MockContainer";
  return MockContainer;
});

jest.mock("@/components/shared/EmailSignUpForm/EmailSignUpForm", () => {
  const MockEmailSignUpForm: React.FC<{ className: string }> = ({
    className,
  }) => (
    <div data-testid="mock-email-signup-form" className={className}>
      Mock Email Sign Up Form
    </div>
  );
  MockEmailSignUpForm.displayName = "MockEmailSignUpForm";
  return MockEmailSignUpForm;
});

jest.mock("@/components/shared/Typography/Typography", () => {
  const MockTypography: React.FC<{
    children: React.ReactNode;
    fontFamily: string;
    size: string;
    tag: keyof JSX.IntrinsicElements;
  }> = ({ children, fontFamily, size, tag: Tag }) => (
    <Tag
      data-testid="mock-typography"
      data-font-family={fontFamily}
      data-size={size}
    >
      {children}
    </Tag>
  );
  MockTypography.displayName = "MockTypography";
  return MockTypography;
});

describe("JoinUs Component", () => {
  it("renders without crashing", () => {
    render(<JoinUs />);
    expect(screen.getByTestId("mock-container")).toBeInTheDocument();
  });

  it("renders the correct background color for Container", () => {
    render(<JoinUs />);
    expect(screen.getByTestId("mock-container")).toHaveAttribute(
      "data-bg-color",
      "light"
    );
  });

  it("renders the correct title", () => {
    render(<JoinUs />);
    const titleElement = screen.getByText("Join the club and get the benefits");
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveAttribute("data-font-family", "secondary");
    expect(titleElement).toHaveAttribute("data-size", "32px");
  });

  it("renders the correct text", () => {
    render(<JoinUs />);
    const textElement = screen.getByText(
      "Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more"
    );
    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveAttribute("data-font-family", "primary");
    expect(textElement).toHaveAttribute("data-size", "16px");
  });

  it("renders the EmailSignUpForm with correct class", () => {
    render(<JoinUs />);
    const formElement = screen.getByTestId("mock-email-signup-form");
    expect(formElement).toBeInTheDocument();
    expect(formElement).toHaveClass("w-[472px]");
    expect(formElement).toHaveClass("lg:w-full");
  });
});
