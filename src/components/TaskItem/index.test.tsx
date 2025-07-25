import { render, screen, fireEvent } from "@testing-library/react";
import TaskItem from ".";
import { useTaskList } from "../../context/taskListContext";

jest.mock("../../context/taskListContext");

describe("TaskItem component", () => {
  const sampleTask = {
    id: "1",
    title: "Test task",
    createdAt: "2024-07-25",
    completedAt: null,
  };

  const mockSetTasks = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useTaskList as jest.Mock).mockReturnValue({
      tasks: [sampleTask],
      setTasks: mockSetTasks,
      toggleTaskCompletion: jest.fn(),
    });
  });

  it("renders the title and date", () => {
    render(
      <TaskItem
        id={sampleTask.id}
        title={sampleTask.title}
        date={sampleTask.createdAt}
        isCompleted={!!sampleTask.completedAt}
        index={0}
      />
    );

    expect(screen.getByText("Test task")).toBeInTheDocument();
    expect(screen.getByText("2024-07-25")).toBeInTheDocument();
  });

  it("calls setTasks when drag and drop reorder happens", () => {
    const dataTransfer = {
      setData: jest.fn(),
      getData: jest.fn().mockReturnValue("0"),
    };

    render(
      <TaskItem
        id={sampleTask.id}
        title={sampleTask.title}
        date={sampleTask.createdAt}
        isCompleted={!!sampleTask.completedAt}
        index={1}
      />
    );

    const item = screen.getByText("Test task").closest("div");
    if (!item) throw new Error("TaskItem div not found");

    fireEvent.dragStart(item, { dataTransfer });
    expect(dataTransfer.setData).toHaveBeenCalledWith("text/plain", "1");

    fireEvent.drop(item, { dataTransfer });
    expect(mockSetTasks).toHaveBeenCalled();
  });

  it("does not call setTasks if dropped in the same position", () => {
    const dataTransfer = {
      setData: jest.fn(),
      getData: jest.fn().mockReturnValue("0"),
    };

    render(
      <TaskItem
        id={sampleTask.id}
        title={sampleTask.title}
        date={sampleTask.createdAt}
        isCompleted={!!sampleTask.completedAt}
        index={0}
      />
    );

    const item = screen.getByText("Test task").closest("div");
    if (!item) throw new Error("TaskItem div not found");

    fireEvent.drop(item, { dataTransfer });
    expect(mockSetTasks).not.toHaveBeenCalled();
  });
});
