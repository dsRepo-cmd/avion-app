import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Counter from "./Counter";

describe("Counter Component", () => {
  it("renders with initial count of 1", () => {
    render(<Counter />);
    expect(screen.getByLabelText("quantity-input")).toHaveValue("1");
  });

  it("increments count when + button is clicked", () => {
    render(<Counter />);
    fireEvent.click(screen.getByText("+"));
    expect(screen.getByLabelText("quantity-input")).toHaveValue("2");
  });

  it("decrements count when - button is clicked", () => {
    render(<Counter />);
    fireEvent.click(screen.getByText("+"));
    fireEvent.click(screen.getByText("-"));
    expect(screen.getByLabelText("quantity-input")).toHaveValue("1");
  });

  it("updates count when input is changed", () => {
    render(<Counter />);
    fireEvent.change(screen.getByLabelText("quantity-input"), {
      target: { value: "5" },
    });
    expect(screen.getByLabelText("quantity-input")).toHaveValue("5");
  });

  it("calls onCountChange when count is updated", () => {
    const mockOnCountChange = jest.fn();
    render(<Counter onCountChange={mockOnCountChange} />);
    fireEvent.click(screen.getByText("+"));
    expect(mockOnCountChange).toHaveBeenCalledWith(2);
  });

  it("disables buttons when loading is true", () => {
    render(<Counter loading={true} />);
    expect(screen.getByText("+")).toBeDisabled();
    expect(screen.getByText("-")).toBeDisabled();
  });

  it("applies custom className", () => {
    render(<Counter className="custom-class" />);
    expect(screen.getByRole("textbox")).toHaveClass("custom-class");
  });
});
