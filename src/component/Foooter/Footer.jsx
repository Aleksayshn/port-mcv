import { LinkItem, LinkList, FootText, Nav, LinkIcon, Text, LinkGitHub } from "./Footer.styled";
import { FaLinkedinIn, FaFacebookF, FaTelegram, FaGithub } from "react-icons/fa";

const Footer = () => {

    return (<Nav>
        <LinkList>
            <LinkItem><FootText>find me in:</FootText></LinkItem>
            <LinkItem><LinkIcon aria-label="LinkedIn" href="https://www.linkedin.com/in/otiankina/" target="_blank"><FaLinkedinIn style={{ fontSize: "24px" }} /></LinkIcon></LinkItem>
            <LinkItem><LinkIcon aria-label="Facebook" href="https://www.facebook.com/alexsashka.belaruska" target="_blank"><FaFacebookF style={{ fontSize: "24px" }} /></LinkIcon></LinkItem>
            <LinkItem><LinkIcon aria-label="Telegram" href="https://t.me/Aleksayshn" target="_blank"><FaTelegram style={{ fontSize: "24px" }} /></LinkIcon></LinkItem>
            <LinkItem><LinkGitHub aria-label="GitHub" href="https://github.com/Aleksayshn" target="_blank"><Text>@Aleksayshn</Text> <FaGithub style={{ fontSize: "24px" }} /></LinkGitHub></LinkItem>
        </LinkList>
    </Nav>)
};

export default Footer;