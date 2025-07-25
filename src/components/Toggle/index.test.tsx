import { render, screen, fireEvent } from "@testing-library/react";
import Toggle from ".";
import { useTaskList } from "../../context/taskListContext";

jest.mock("../../context/taskListContext");

describe("Toggle", () => {
  const toggleTaskCompletionMock = jest.fn();

  beforeEach(() => {
    (useTaskList as jest.Mock).mockReturnValue({
      toggleTaskCompletion: toggleTaskCompletionMock,
      tasks: [],
      setTasks: jest.fn(),
    });
  });

  it("should render with correct icon color based on isSelected", () => {
    const { rerender } = render(
      <Toggle id="1" title="Test Task" isSelected={true} />
    );

    let icon = screen.getByTestId("icon");
    expect(icon).toHaveClass("text-green-700");

    rerender(<Toggle id="1" title="Test Task" isSelected={false} />);
    icon = screen.getByTestId("icon");
    expect(icon).toHaveClass("text-gray-300");
  });

  it("should call toggleTaskCompletion when clicked", () => {
    render(<Toggle id="1" title="Test Task" isSelected={false} />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(toggleTaskCompletionMock).toHaveBeenCalledWith("1");
  });
});
