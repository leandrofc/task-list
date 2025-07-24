import Filter from "../Filter";
import Title from "../Title";

const Header = () => {
    return (
        <div className="flex flex-col gap-6 md:w-full md:max-w-[706px]">
            <Title text="Tasks" />
            <Filter />
            <div className="w-full h-px bg-gray-300" />
        </div>

    )
}

export default Header;