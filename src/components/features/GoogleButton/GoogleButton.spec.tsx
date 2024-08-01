import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import GoogleButton from "./GoogleButton";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

jest.mock("next-auth/react", () => ({
  signIn: jest.fn(),
}));

jest.mock("next/navigation", () => ({
  useSearchParams: jest.fn(),
}));

jest.mock("../../shared/Button/Button", () => {
  const MockButton: React.FC<{
    children: React.ReactNode;
    onClick: () => void;
  }> = ({ children, onClick }) => (
    <button data-testid="mock-button" onClick={onClick}>
      {children}
    </button>
  );
  MockButton.displayName = "MockButton";
  return MockButton;
});

jest.mock("@/components/icons/GoogleSquareIcon", () => {
  const MockGoogleSquareIcon: React.FC = () => (
    <div data-testid="mock-google-icon">Google Icon</div>
  );
  MockGoogleSquareIcon.displayName = "MockGoogleSquareIcon";
  return MockGoogleSquareIcon;
});

describe("GoogleButton Component", () => {
  const mockTitle = "Sign in with Google";
  const mockCallbackUrl = "/profile";

  beforeEach(() => {
    (useSearchParams as jest.Mock).mockReturnValue({
      get: jest.fn().mockReturnValue(mockCallbackUrl),
    });
  });

  it("renders without crashing", () => {
    render(<GoogleButton title={mockTitle} />);
    expect(screen.getByTestId("mock-button")).toBeInTheDocument();
  });

  it("displays the correct title", () => {
    render(<GoogleButton title={mockTitle} />);
    expect(screen.getByText(mockTitle)).toBeInTheDocument();
  });

  it("renders the Google icon", () => {
    render(<GoogleButton title={mockTitle} />);
    expect(screen.getByTestId("mock-google-icon")).toBeInTheDocument();
  });

  it("calls signIn with correct parameters when clicked", () => {
    render(<GoogleButton title={mockTitle} />);
    const button = screen.getByTestId("mock-button");
    fireEvent.click(button);
    expect(signIn).toHaveBeenCalledWith("google", {
      callbackUrl: mockCallbackUrl,
    });
  });

  it("uses default callback URL when not provided in search params", () => {
    (useSearchParams as jest.Mock).mockReturnValue({
      get: jest.fn().mockReturnValue(null),
    });

    render(<GoogleButton title={mockTitle} />);
    const button = screen.getByTestId("mock-button");
    fireEvent.click(button);
    expect(signIn).toHaveBeenCalledWith("google", { callbackUrl: "/profile" });
  });
});
