/* eslint-disable react/jsx-no-comment-textnodes */
import { Container, Main } from "./style";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Meal } from "../../components/Meal";

import Macarrons from "../../assets/svg/Macarrons.svg";
import Heart from "../../assets/svg/Heart.svg";
import Image1 from "../../assets/imageMeal/Mask group-1.png";
import Image2 from "../../assets/imageMeal/Mask group-10.png";
import Image3 from "../../assets/imageMeal/Mask group-11.png";
import Image4 from "../../assets/imageMeal/Mask group-9.png";

export function Home() {
  return (
    <Container>
      <Header mode={true} id="Header" />
      <Main>
        <div id="Banner">
          <img src={Macarrons} alt="Macarrons" />
          <h2>Sabores inigualáveis</h2>
          <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
        </div>

        <section>
          <h3>Refeições</h3>
          <div id="Carousel">
            <Meal
              svg={Heart}
              imageMeal={Image1}
              name="Torrada"
              price="R$ 49,97"
              counter={true}
              button="Incluir"
            />
            <Meal
              svg={Heart}
              imageMeal={Image2}
              name="Torrada"
              price="R$ 49,97"
              counter={true}
              button="Incluir"
            />
            <Meal
              svg={Heart}
              imageMeal={Image3}
              name="Torrada"
              price="R$ 49,97"
              counter={true}
              button="Incluir"
            />
            <Meal
              svg={Heart}
              imageMeal={Image4}
              name="Torrada"
              price="R$ 49,97"
              counter={true}
              button="Incluir"
            />
          </div>
        </section>

        <section>
          <h3>Pratos principais</h3>
          <div id="Carousel">
          <Meal id="01"
              svg={Heart}
              imageMeal={Image1}
              name="Torrada"
              price="R$ 49,97"
              counter={true}
              button="Incluir"
            />
            <Meal
              svg={Heart}
              imageMeal={Image2}
              name="Torrada"
              price="R$ 49,97"
              counter={true}
              button="Incluir"
            />
            <Meal
              svg={Heart}
              imageMeal={Image3}
              name="Torrada"
              price="R$ 49,97"
              counter={true}
              button="Incluir"
            />
            <Meal
              svg={Heart}
              imageMeal={Image4}
              name="Torrada"
              price="R$ 49,97"
              counter={true}
              button="Incluir"
            />
          </div>
        </section>
      </Main>
      <Footer />
    </Container>
  );
}
