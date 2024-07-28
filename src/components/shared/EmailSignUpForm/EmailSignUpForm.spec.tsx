import React from "react";
import { render, screen } from "@testing-library/react";
import EmailSignUpForm from "./EmailSignUpForm";

describe("EmailSignUpForm", () => {
  test("renders the form with default light variant", () => {
    render(<EmailSignUpForm />);

    const formElement = screen.getByTestId("email-signup-form");
    expect(formElement).toHaveClass("flex bg-lightGrey");

    const inputElement = screen.getByPlaceholderText("your@email.com");
    expect(inputElement).toHaveClass(
      "grow px-8 py-4 lg:w-[200px] bg-lightGrey"
    );
  });

  test("renders the form with dark variant", () => {
    render(<EmailSignUpForm variant="dark" />);

    const formElement = screen.getByTestId("email-signup-form");
    expect(formElement).toHaveClass("flex bg-[#FFFFFF1F] text-white");

    const inputElement = screen.getByPlaceholderText("your@email.com");
    expect(inputElement).toHaveClass(
      "grow px-8 py-4 lg:w-[200px] bg-[#FFFFFF1F] text-white"
    );
  });

  test("applies additional class names", () => {
    render(<EmailSignUpForm className="additional-class" />);

    const formElement = screen.getByTestId("email-signup-form");
    expect(formElement).toHaveClass("flex bg-lightGrey additional-class");
  });
});
