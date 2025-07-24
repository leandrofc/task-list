import Footer from "../../components/Footer";
import Header from "../../components/Header";
import TaskList from "../../components/TaskList";

const Home = () => {
    return (
      <div className="h-screen flex flex-col p-6 md:items-center">
          <Header />
          <TaskList />
          <Footer />
      </div>
    )
}

export default Home;