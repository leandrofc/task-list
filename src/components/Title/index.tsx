import type TitleProps from "./index.types";

const Title = ({ text }: TitleProps) => {
    return (
        <h1 className="text-black text-xl font-bold">
            {text}
        </h1>
    )
}

export default Title;