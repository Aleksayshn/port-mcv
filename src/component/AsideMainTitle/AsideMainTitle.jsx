import { GoTriangleRight } from "react-icons/go";
import { Title, AnimationIcon } from "./AsideMainTitle.styled";

const AsideMainTitle = ({ text, handleOpenSubMenu, open }) => {

    return (
        <Title onClick={handleOpenSubMenu} ><AnimationIcon className={open ? "open" : "close"}><GoTriangleRight /></AnimationIcon><span>{text}</span></Title>
    );
};

export default AsideMainTitle;