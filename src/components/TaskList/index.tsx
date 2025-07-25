import Footer from "../Footer";
import Header from "../Header";
import List from "../List";

const TaskList = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-screen flex flex-col p-6 md:items-center">
            {children}
        </div>
    );
}

TaskList.Header = Header;
TaskList.List = List;
TaskList.Footer = Footer;

export default TaskList;