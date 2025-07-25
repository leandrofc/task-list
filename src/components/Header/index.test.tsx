import { render, screen } from "@testing-library/react";
import Header from ".";
import { TaskListProvider } from "../../context/taskListContext";

describe("Header component", () => {
  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <TaskListProvider>{children}</TaskListProvider>
  );

  it("renders the Title with text 'Tasks'", () => {
    render(<Header />, { wrapper: Wrapper });
    expect(screen.getByText("Tasks")).toBeInTheDocument();
  });

  it("renders the Filter buttons", () => {
    render(<Header />, { wrapper: Wrapper });
    expect(screen.getByRole("button", { name: /all/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /active/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /completed/i })).toBeInTheDocument();
  });

  it("renders the decorative line", () => {
    render(<Header />, { wrapper: Wrapper });
    const line = screen.getByRole("separator");
    expect(line).toBeInTheDocument();
  });
});
