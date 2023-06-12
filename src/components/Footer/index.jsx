import {Container} from "./style";
import PolygonLogo from "../../assets/Polygon 1.svg";

export function Footer() {
    return (
        <Container>
            <section id="logo">
                <img src={PolygonLogo} alt="logo" />
                <span>food explorer</span>
            </section>

           <span>© 2023 - Todos os direitos reservados.</span> 
        </Container>
    )
}