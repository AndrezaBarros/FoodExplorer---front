import { Container, Main } from "./style";

import CaretLeft from "../../assets/svg/CaretLeft.svg";
import Upload from "../../assets/svg/Upload.svg";

import Close from "../../assets/svg/Close.svg";
import Plus from "../../assets/svg/Plus.svg";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export function EditMeal() {
  return (
    <Container>
      <Header id="Header" mode={true}/>
      <Main>
        <ButtonText title="voltar" img={CaretLeft} id="ButtonText" />
        <h1>Novo prato</h1>
        <form>
          <div>
            <span>Imagem do prato</span>
            <button id="UploadImage">
              <img src={Upload} alt="Upload" />
              Selecione imagem
            </button>
          </div>

          <div>
            <span>Nome</span>
            <Input placeholder="Ex.: Salada Ceasar" />
          </div>

          <div>
            <span>Categoria</span>
            <select name="select" id="select">
              <option value="meal">Refeição</option>
              <option value="dessert">Sobremesa</option>
              <option value="drink">Bebida</option>
            </select>
          </div>

          <div>
            <span>Ingredientes</span>
            <section id="tags">
              <div>
                <input type="text" value="Pão Naan"/>
                <button><img src={Close} alt="close" /></button>
              </div>
              <div className="outlined">
                <input type="text" value="Adicionar"/>
                <button><img src={Plus} alt="Plus" /></button>
              </div>
            </section>
          </div>

          <div>
            <span>Preço</span>
            <Input placeholder="R$ 00,00" />
          </div>

          <div>
            <span>Descrição</span>
            <textarea name="description" id="description" cols="45" rows="8">
              Fale brevemente sobre o prato, seus ingredientes e composição
            </textarea>
          </div>

          <div id="Submits">
            <Button title="Salvar Alterações"/>
          </div>
        </form>
      </Main>
      <Footer />
    </Container>
  );
}
