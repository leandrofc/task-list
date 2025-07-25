import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from ".";

describe("Button component", () => {
  it("renders the button with text", () => {
    render(<Button text="Click me" />);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    render(<Button text="Click me" onClick={handleClick} />);
    fireEvent.click(screen.getByText("Click me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("does not call onClick when disabled", () => {
    const handleClick = jest.fn();
    render(<Button text="Disabled" isDisable onClick={handleClick} />);
    fireEvent.click(screen.getByText("Disabled"));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("shows loading spinner when isLoading is true", () => {
    render(<Button text="Loading" isLoading />);
    expect(screen.getByTestId("loading-icon")).toBeInTheDocument();
    expect(screen.queryByText("Loading")).not.toBeInTheDocument();
  });

  it("applies the correct variant classes", () => {
    render(<Button text="Primary" variant="primary" />);
    const button = screen.getByText("Primary");
    expect(button).toHaveClass("bg-blue-700");
    expect(button).toHaveClass("text-white");
  });

  it("applies selected styles when isSelected is true", () => {
    render(<Button text="Selected" isSelected />);
    const button = screen.getByText("Selected");
    expect(button).toHaveClass("bg-blue-100");
    expect(button).toHaveClass("text-blue-700");
  });

  it("has w-auto when isWidthAuto is true", () => {
    render(<Button text="Auto width" isWidthAuto />);
    const button = screen.getByText("Auto width");
    expect(button).toHaveClass("w-auto");
  });

  it("has full width when isWidthAuto is false or undefined", () => {
    render(<Button text="Full width" />);
    const button = screen.getByText("Full width");
    expect(button).toHaveClass("w-full");
  });

  it("applies correct size class based on size prop", () => {
    render(<Button text="Large Button" size="large" />);
    const button = screen.getByText("Large Button");
    expect(button).toHaveClass("h-14");
  });
});
