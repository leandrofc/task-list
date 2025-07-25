import { render, screen } from "@testing-library/react";
import List from ".";
import * as taskListContext from "../../context/taskListContext";

const mockFilteredTasks = [
  {
    id: "1",
    title: "Mock Task 1",
    createdAt: "2025-07-24T00:00:00.000Z",
    completedAt: null,
  },
  {
    id: "2",
    title: "Mock Task 2",
    createdAt: "2025-07-23T00:00:00.000Z",
    completedAt: "2025-07-24T00:00:00.000Z",
  },
];

jest.spyOn(taskListContext, "useTaskList").mockReturnValue({
  filteredTasks: mockFilteredTasks,
  tasks: [],
  setTasks: jest.fn(),
  filter: "all",
  setFilter: jest.fn(),
  addTask: jest.fn(),
  toggleTaskCompletion: jest.fn(),
});

describe("List component with mock context", () => {
  it("renders mocked filtered tasks", () => {
    render(<List />);

    expect(screen.getByText("Mock Task 1")).toBeInTheDocument();
    expect(screen.getByText("Mock Task 2")).toBeInTheDocument();
  });
});
