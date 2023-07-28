import { Container, MainMobile, MainDesktop } from "./style";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMediaQuery } from "@uidotdev/usehooks";

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
  let [data, setData] = useState();

  const fileUploadForm = new FormData();
  const navigateTo = useNavigate();
  const params = useParams(null);
  const desktopWidth = useMediaQuery("only screen and (min-width : 1368px)");

  function handleAddIngredient() {
    ingredients.push({name: newIngredient})
    setIngredients(ingredients);
    setNewIngredient("");
  }

  function handleRemoveIngredient(index) {
    const newIngridients = [...ingredients];
    newIngridients.splice(index, 1)
    setIngredients(newIngridients);

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
      .then(async (response) => {
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

  async function handleUpdateMeal(id) {
    fileUploadForm.append("image", image);

    api
      .put(`/meals/${params.id}`, {
        name: mealName,
        category,
        ingredients,
        price,
        description,
      })
      .then(async (response) => {
        if (image != null) {
          await api.patch(`/meals/${params.id}/image`, fileUploadForm);
        }

        alert("Alterações salvas com sucesso");
        navigateTo("/");
      })
      .catch((error) => {
        if (error.response) {
          return alert(error.response.data.message);
        } else {
          return alert("Não foi possível atualizar prato");
        }
      });
  }

  async function handleDeleteMeal(id) {
    api.delete(`/meals/${id}`);

    alert("Prato excluído com sucesso");
    navigateTo("/");
  }

  useEffect(() => {
    async function fetchMeal() {
      const response = await api.get(`/meals/${params.id}`);
      setData(response.data);

      setMealName(response.data.name);
      setCategory(response.data.category);
      setIngredients(response.data.ingredients);
      setPrice(response.data.price);
      setDescription(response.data.description);
    }

    if (params.id != -1) {
      fetchMeal()
    }

  }, []);

  if (!desktopWidth) {
    if (params.id != -1) {
      return data &&
        <Container>
          <Header id="Header" mode={true} />
          <MainMobile>
            <ButtonText title="voltar" img={CaretLeft} id="ButtonText" to="/" />

            <h1>Editar prato</h1>

            <form>
              <label>Imagem do prato</label>
              <div id="UploadImage">
                <img src={Upload} alt="Upload" />
                <span>
                  {!data.image ? "Selecione imagem" : "Imagem selecionada"}
                </span>
                <input type="file" onChange={handleInsertMealImage} />
              </div>

              <label>Nome</label>
              <input
                className="Input"
                value={mealName}
                onChange={(e) => setMealName(e.target.value)}
                id="Name"
              />

              <label>Categoria</label>
              <select
                name="select"
                id="Select"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value=""></option>
                <option value="meal">Refeição</option>
                <option value="dessert">Sobremesa</option>
                <option value="drink">Bebida</option>
              </select>

              <label>Ingredientes</label>
              <section id="Ingredients">
                {
                  ingredients.map((ingredient, index) => (
                    <div key={String(index)}>
                      <input type="text" value={ingredient.name} readOnly />
                      <button onClick={() => handleRemoveIngredient(index)} type="button">
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
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                type="text"
              />

              <label>Descrição</label>
              <textarea
                name="description"
                id="Description"
                cols="20"
                rows="5"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>

              <div id="Submits">
                <Button id="ButtonRemove" title="Excluir prato" onClick={() => handleDeleteMeal(params.id)} />
                <Button title="Salvar Alterações" onClick={() => handleUpdateMeal(data.id)} />
              </div>
            </form>
          </MainMobile>
          <Footer />
        </Container>
    } else {
      return (
        <Container>
          <Header id="Header" mode={true} />
          <MainMobile>
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
                cols="20"
                rows="5"
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              ></textarea>

              <div id="Submits">
                <Button title="Salvar Alterações" onClick={handleNewMeal} />
              </div>
            </form>
          </MainMobile>
          <Footer />
        </Container>
      );
    }
  }

  if (params.id != -1) {
    return data && 
      <Container>
        <Header id="Header" mode={true} />
        <MainDesktop>
          <ButtonText title="voltar" img={CaretLeft} id="ButtonText" to="/" />

          <h1>Editar prato</h1>

          <form>
            <section id="Line1">
              <div>
                <label>Imagem do prato</label>
                <div id="UploadImage">
                  <img src={Upload} alt="Upload" />
                  <span>
                    {!data.image ? "Selecione imagem" : "Imagem selecionada"}
                  </span>
                  <input type="file" onChange={handleInsertMealImage} />
                </div>
              </div>

              <div>
                <label>Nome</label>
                <input
                  className="Input"
                  value={mealName}
                  placeholder="Ex.: Salada Ceasar"
                  onChange={(e) => setMealName(e.target.value)}
                  id="Name"
                />
              </div>

              <div>
                <label>Categoria</label>
                <select
                  name="select"
                  id="Select"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value=""></option>
                  <option value="meal">Refeição</option>
                  <option value="dessert">Sobremesa</option>
                  <option value="drink">Bebida</option>
                </select>
              </div>
            </section>

            <section id="Line2">
              <div>
                <label>Ingredientes</label>
                <section id="Ingredients">
                  {
                    ingredients.map((ingredient, index) => (
                      <div key={String(index)}>
                        <input type="text" value={ingredient.name} readOnly />
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
              </div>

              <div>
                <label>Preço</label>
                <input
                  className="Input"
                  placeholder="R$ 00,00"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  id="Price"
                  type="text"
                />
              </div>
            </section>

            <label>Descrição</label>
            <textarea
              name="description"
              id="Description"
              cols="20"
              rows="5"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            ></textarea>

            <div id="Submits">
              <Button id="ButtonRemove" title="Excluir prato" onClick={() => handleDeleteMeal(params.id)} />
              <Button title="Salvar Alterações" onClick={handleUpdateMeal} id="ButtonSave" />
            </div>
          </form>
        </MainDesktop>
        <Footer />
      </Container>
  } else {
    return (
      <Container>
        <Header id="Header" mode={true} />
        <MainDesktop>
          <ButtonText title="voltar" img={CaretLeft} id="ButtonText" to="/" />

          <h1>Adicionar prato</h1>
          <form>
            <section id="Line1">
              <div>
                <label>Imagem do prato</label>
                <div id="UploadImage">
                  <img src={Upload} alt="Upload" />
                  <span>
                    {!image ? "Selecione imagem" : "Imagem selecionada"}
                  </span>
                  <input type="file" onChange={handleInsertMealImage} />
                </div>
              </div>

              <div>
                <label>Nome</label>
                <input
                  className="Input"
                  placeholder="Ex.: Salada Ceasar"
                  onChange={(e) => setMealName(e.target.value)}
                  id="Name"
                />
              </div>

              <div>
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
              </div>
            </section>

            <section id="Line2">
              <div>
                <label>Ingredientes</label>
                <section id="Ingredients">
                  {ingredients &&
                    ingredients.map((ingredient, index) => (
                      <div key={String(index)}>
                        <input type="text" value={ingredient.name} readOnly />
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
              </div>

              <div>
                <label>Preço</label>
                <input
                  className="Input"
                  placeholder="R$ 00,00"
                  onChange={(e) => setPrice(e.target.value)}
                  id="Price"
                  type="text"
                />
              </div>
            </section>

            <label>Descrição</label>
            <textarea
              name="description"
              id="Description"
              cols="20"
              rows="5"
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            ></textarea>

            <div id="Submits">
              <Button title="Salvar Alterações" onClick={handleNewMeal} id="ButtonSave" />
            </div>
          </form>
        </MainDesktop>
        <Footer />
      </Container>
    );
  }

}
