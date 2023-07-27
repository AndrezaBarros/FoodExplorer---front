import { ContainerMobile, ContainerDesktop } from "./style";
import PolygonLogo from "../../assets/svg/Polygon 1.svg";
import { useMediaQuery } from "@uidotdev/usehooks";

export function Footer() {
    const desktopWidth = useMediaQuery("only screen and (min-width : 1368px)");

    if (!desktopWidth) {
        return (
            <ContainerMobile>
                <section id="logo">
                    <img src={PolygonLogo} alt="logo" />
                    <span>food explorer</span>
                </section>

                <span>© 2023 - Todos os direitos reservados.</span>
            </ContainerMobile>
        )
    }

    return (
        <ContainerDesktop>
            <section id="logo">
                <img src={PolygonLogo} alt="logo" />
                <span>food explorer</span>
            </section>

            <span>© 2023 - Todos os direitos reservados.</span>
        </ContainerDesktop>
    )
}