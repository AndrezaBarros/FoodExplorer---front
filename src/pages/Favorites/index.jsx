import { Container, Main } from "./style";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import Img from "../../assets/imageMeal/Mask group.png";

export function Favorites() {
    return (<Container>
        <Header mode={true}/>
        <Main>
            <h1>Meus favoritos</h1>
            <section>
                <img src={Img} alt="Imagem" id="Img"/>
                <div>
                    <h2>Salada Radish</h2>
                    <button>Remover dos Favoritos</button>
                </div>
            </section>
        </Main>
        <Footer/>
    </Container>)
}