import { render, screen } from "@testing-library/react";
import Title from ".";

describe("Title component", () => {
  it("renders the text passed via props", () => {
    const testText = "Hello, World!";
    render(<Title text={testText} />);

    expect(screen.getByText(testText)).toBeInTheDocument();
  });
});
