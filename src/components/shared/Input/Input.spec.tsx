import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Input from "./Input";

describe("Input component", () => {
  test("renders the input with default type text", () => {
    render(<Input name="email" label="Email" />);

    const inputElement = screen.getByLabelText("Email");
    expect(inputElement).toHaveAttribute("type", "text");
  });

  test("renders the input with an error message", () => {
    render(<Input name="email" label="Email" error="Invalid email" />);

    const errorElement = screen.getByText("Invalid email");
    expect(errorElement).toBeInTheDocument();
  });

  test("renders the password input and toggles visibility", () => {
    render(<Input name="password" label="Password" password />);

    const inputElement = screen.getByLabelText("Password");
    expect(inputElement).toHaveAttribute("type", "password");

    const toggleButton = screen.getByRole("button");
    fireEvent.click(toggleButton);

    expect(inputElement).toHaveAttribute("type", "text");
  });

  test("applies custom class names", () => {
    render(<Input name="custom" label="Custom" className="custom-class" />);

    const inputElement = screen.getByLabelText("Custom");
    expect(inputElement).toHaveClass("custom-class");
  });

  test("renders label correctly", () => {
    render(<Input name="test" label="Test Label" />);

    const labelElement = screen.getByLabelText("Test Label");
    expect(labelElement).toBeInTheDocument();
  });

  test("renders the input with placeholder", () => {
    render(<Input name="email" label="Email" placeholder="Enter your email" />);

    const inputElement = screen.getByPlaceholderText("Enter your email");
    expect(inputElement).toBeInTheDocument();
  });
});
