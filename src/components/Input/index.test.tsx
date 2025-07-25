import { render, screen, fireEvent } from "@testing-library/react";
import Input from ".";
import { useRef } from "react";

describe("Input component", () => {
  it("renders label and input", () => {
    render(<Input label="Name" placeholder="Type your name" />);
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Type your name")).toBeInTheDocument();
  });

  it("focuses input when wrapper div is clicked", () => {
    render(<Input label="Email" id="task-name"/>);
    const wrapperDiv = screen.getByText("Email").parentElement;
    const input = screen.getByLabelText("Email");

    expect(document.activeElement).not.toBe(input);
    if (wrapperDiv) {
      fireEvent.click(wrapperDiv);
      expect(document.activeElement).toBe(input);
    }
  });

  it("exposes focus method via ref", () => {
    const FocusTester = () => {
      const inputRef = useRef<HTMLInputElement>(null);

      return (
        <>
          <Input ref={inputRef} label="Test" id="task-name" />
          <button onClick={() => inputRef.current?.focus()}>Focus Input</button>
        </>
      );
    };

    render(<FocusTester />);
    const button = screen.getByText("Focus Input");
    const input = screen.getByLabelText("Test");

    expect(document.activeElement).not.toBe(input);
    fireEvent.click(button);
    expect(document.activeElement).toBe(input);
  });
});
