import { Container, Main } from "./style";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { Counter } from "../../components/Counter";

import Image1 from "../../assets/imageMeal/Mask group.png";
import CaretLeft from "../../assets/svg/CaretLeft.svg";
import Receipt from "../../assets/svg/Receipt.svg";

export function DetailsMeal() {
  return (
    <Container>
      <Header mode={true} />
      <Main>
        <ButtonText img={CaretLeft} title="voltar" id="ButtonText"/>
        <img src={Image1} alt="Meal" id="Meal"/> 
        <h1>Salada Ravanello</h1>
        <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>
        <div id="Tags">
            <span>alface</span>
            <span>cebola</span>
            <span>pão naan</span>
            <span>alface</span>
            <span>cebola</span>
            <span>pão naan</span>
        </div>
        <div id="Order">
            <Counter id="Counter"/>
            <Button title="pedir • R$ 25,00" img={Receipt} id="Button"/>
        </div>
      </Main>
      <Footer />
    </Container>
  );
}
