import { render, screen, fireEvent } from "@testing-library/react";
import Modal from ".";
import { useTaskList } from "../../context/taskListContext";

jest.mock("../../context/taskListContext");

describe("Modal component", () => {
  const mockAddTask = jest.fn();
  const mockOnClose = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useTaskList as jest.Mock).mockReturnValue({
      addTask: mockAddTask,
    });
  });

  it("does not render when isOpen is false", () => {
    render(<Modal isOpen={false} onClose={mockOnClose} />);
    expect(screen.queryByText(/add new task/i)).not.toBeInTheDocument();
  });

  it("renders modal when isOpen is true", () => {
    render(<Modal isOpen={true} onClose={mockOnClose} />);
    expect(screen.getByText(/add new task/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/enter the task name/i)).toBeInTheDocument();
  });

  it("focuses the input on open", () => {
    render(<Modal isOpen={true} onClose={mockOnClose} />);
    const input = screen.getByLabelText(/enter the task name/i);
    expect(document.activeElement).toBe(input);
  });

  it("calls onClose when clicking the close button", () => {
    render(<Modal isOpen={true} onClose={mockOnClose} />);
    const closeButton = screen.getByLabelText(/close modal/i);
    fireEvent.click(closeButton);
    expect(mockOnClose).toHaveBeenCalled();
  });

  it("calls onClose when clicking outside the modal content (overlay)", () => {
    render(<Modal isOpen={true} onClose={mockOnClose} />);
    const overlay = screen.getByRole("dialog", { hidden: true }) || screen.getByText(/add new task/i).parentElement?.parentElement;
    if (!overlay) throw new Error("Overlay not found");
    fireEvent.click(overlay);
    expect(mockOnClose).toHaveBeenCalled();
  });

  it("does not call onClose when clicking inside the modal content", () => {
    render(<Modal isOpen={true} onClose={mockOnClose} />);
    const modalContent = screen.getByText(/add new task/i).parentElement;
    if (!modalContent) throw new Error("Modal content not found");
    fireEvent.click(modalContent);
    expect(mockOnClose).not.toHaveBeenCalled();
  });

  it("adds task and closes modal when form is submitted with valid input", () => {
    render(<Modal isOpen={true} onClose={mockOnClose} />);
    const input = screen.getByLabelText(/enter the task name/i);
    const addButton = screen.getByRole("button", { name: /add task/i });

    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.click(addButton);

    expect(mockAddTask).toHaveBeenCalledWith("New Task");
    expect(mockOnClose).toHaveBeenCalled();
    expect(input).toHaveValue("");
  });

  it("does not add task or close modal if input is empty or whitespace", () => {
    render(<Modal isOpen={true} onClose={mockOnClose} />);
    const input = screen.getByLabelText(/enter the task name/i);
    const addButton = screen.getByRole("button", { name: /add task/i });

    fireEvent.change(input, { target: { value: "    " } });
    fireEvent.click(addButton);

    expect(mockAddTask).not.toHaveBeenCalled();
    expect(mockOnClose).not.toHaveBeenCalled();
    expect(input).toHaveValue("    ");
  });
});
