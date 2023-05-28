import FooterStyled from "./style"
import { FaGithubSquare } from "react-icons/fa"
import { BsLinkedin } from "react-icons/bs"

const Footer: React.FC = () => {
    return (
        <FooterStyled>
            <h5 className="heading-5-500">Teste Técnico Full Stack Jr - W3lcome</h5>
            <a href="https://github.com/lgrimm6/w3lcome-teste-tecnico" target="blank">
                <FaGithubSquare size={24} />
            </a>
            <a href="https://www.linkedin.com/in/robertofernandesfreitas/" target="blank">
                <BsLinkedin size={22} />
            </a>
        </FooterStyled>
    )
}

export default Footer