import { render, screen, fireEvent } from "@testing-library/react";
import CheckBox from "./CheckBox";

describe("CheckBox", () => {
  it("renders the checkbox with correct value and className", () => {
    render(
      <CheckBox value="test" onChange={() => {}} className="custom-class" />
    );

    const inputElement = screen.getByRole("checkbox");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("value", "test");
    expect(inputElement).toHaveClass("custom-class");
  });

  it("renders the label with correct text", () => {
    render(<CheckBox value="test" onChange={() => {}} />);
    const labelElement = screen.getByText("test");
    expect(labelElement).toBeInTheDocument();
  });

  it("calls onChange handler when checkbox is clicked", () => {
    const handleChange = jest.fn();
    render(<CheckBox value="test" onChange={handleChange} />);

    const inputElement = screen.getByRole("checkbox");
    fireEvent.click(inputElement);

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("applies the correct classes when checkbox is checked", () => {
    render(<CheckBox value="test" onChange={() => {}} checked />);

    const inputElement = screen.getByRole("checkbox");
    expect(inputElement).toBeChecked();
    expect(inputElement).toHaveClass(
      "checked:border-primary checked:bg-primary"
    );
  });
});
