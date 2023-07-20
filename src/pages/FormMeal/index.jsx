import { Container, Main } from "./style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import CaretLeft from "../../assets/svg/CaretLeft.svg";
import Upload from "../../assets/svg/Upload.svg";

import Close from "../../assets/svg/Close.svg";
import Plus from "../../assets/svg/Plus.svg";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { api } from "../../services/api";

export function FormMeal() {
  const [image, setImage] = useState(null);
  const [mealName, setMealName] = useState("");
  const [category, setCategory] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const fileUploadForm = new FormData();
  const navigateTo = useNavigate();

  function handleAddIngredient() {
    setIngredients((prevState) => [...prevState, newIngredient]);
    setNewIngredient("");
  }

  function handleRemoveIngredient(deleted) {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== deleted)
    );
  }

  function handleInsertMealImage(event) {
    const file = event.target.files[0];
    setImage(file);
  }

  async function handleNewMeal() {
    if (
      !image ||
      !mealName ||
      !category ||
      !ingredients ||
      !price ||
      !description
    ) {
      return alert("Por favor preencher todos os campos");
    }

    fileUploadForm.append("image", image);

    api
      .post("/meals", {
        name: mealName,
        category,
        ingredients,
        price,
        description,
      })
      .then(async(response) => {
        await api.patch(`/meals/${response.data}/image`, fileUploadForm);


        alert("Novo prato adicionado com sucesso");
        navigateTo("/");
      })
      .catch((error) => {
        if (error.response) {
          return alert(error.response.data.message);
        } else {
          return alert("Não foi possível adicionar prato");
        }
      });
  }

  return (
    <Container>
      <Header id="Header" mode={true} />
      <Main>
        <ButtonText title="voltar" img={CaretLeft} id="ButtonText" to="/" />

        <h1>Novo prato</h1>

        <form>
          <label>Imagem do prato</label>
          <div id="UploadImage">
            <img src={Upload} alt="Upload" />
            <span>
              {!image ? "Selecione imagem" : "Imagem selecionada"}
            </span>
            <input type="file" onChange={handleInsertMealImage} />
          </div>

          <label>Nome</label>
          <input
            className="Input"
            placeholder="Ex.: Salada Ceasar"
            onChange={(e) => setMealName(e.target.value)}
            id="Name"
          />

          <label>Categoria</label>
          <select
            name="select"
            id="Select"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value=""></option>
            <option value="meal">Refeição</option>
            <option value="dessert">Sobremesa</option>
            <option value="drink">Bebida</option>
          </select>

          <label>Ingredientes</label>
          <section id="Ingredients">
            {ingredients &&
              ingredients.map((ingredient, index) => (
                <div key={String(index)}>
                  <input type="text" value={ingredient} readOnly />
                  <button onClick={() => handleRemoveIngredient(ingredient)}>
                    <img src={Close} alt="close" />
                  </button>
                </div>
              ))}

            <div className="outlined">
              <input
                type="text"
                placeholder="Adicionar"
                value={newIngredient}
                onChange={(e) => setNewIngredient(e.target.value)}
              />
              <button type="button" onClick={handleAddIngredient}>
                <img src={Plus} alt="Plus" />
              </button>
            </div>
          </section>

          <label>Preço</label>
          <input
            className="Input"
            placeholder="R$ 00,00"
            onChange={(e) => setPrice(e.target.value)}
            type="text"
          />

          <label>Descrição</label>
          <textarea
            name="description"
            id="Description"
            cols="45"
            rows="8"
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
          ></textarea>

          <div id="Submits">
            <Button id="ButtonRemove" title="Excluir prato" />
            <Button title="Salvar Alterações" onClick={handleNewMeal} />
          </div>
        </form>
      </Main>
      <Footer />
    </Container>
  );
}
