import TaskList from "../../components/TaskList";
import { TaskListProvider } from "../../context/TaskListContext";

const Home = () => {
    return (
      <TaskListProvider>
        <TaskList>
          <TaskList.Header />
          <TaskList.List />
          <TaskList.Footer />
        </TaskList>
      </TaskListProvider>
    )
}

export default Home;