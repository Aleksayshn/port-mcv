import { RiMailFill, RiPhoneFill } from "react-icons/ri";
import { TitleContacList, TitleContacItem, ContactLink, Container } from "./Contact.styled";
import AsideMainTitle from "../../component/AsideMainTitle/AsideMainTitle";
import { useState } from "react";


const Contact = ({ open = false }) => {
    const [openMenu, setOpenMenu] = useState(open);

    const handleOpenSubMenu = () => {
        setOpenMenu(prev => !prev);
    };

    return (
        <Container>
            <AsideMainTitle handleOpenSubMenu={handleOpenSubMenu} open={openMenu} text={'contacts'} />
            <TitleContacList className={openMenu ? "open" : "close"}>
                <TitleContacItem><ContactLink href="mailto:ag7756862@gmail.com"><RiMailFill style={{ fontSize: "16px" }} /> <span>ag7756862@gmail.com</span> </ContactLink></TitleContacItem>
                <TitleContacItem><ContactLink href="tel:+380681762429"><RiPhoneFill style={{ fontSize: "16px" }} /><span>+38 0681762429</span></ContactLink></TitleContacItem>
            </TitleContacList>
        </Container>)
};

export default Contact;