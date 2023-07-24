/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-no-comment-textnodes */
import { Container, Main } from "./style";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { Counter } from "../../components/Counter";
import { api } from "../../services/api";

import Macarrons from "../../assets/svg/Macarrons.svg";
import Heart from "../../assets/svg/Heart.svg";
import Pencil from "../../assets/svg/Pencil.svg";

import imagePlaceholder from "../../assets/imageMeal/Mask group.png";

export function Home() {
  const [meals, setMeals] = useState([]);
  const [mealsUnity, setMealsUnity] = useState([]);
  const [cart, setCart] = useState([]);

  const navigateTo = useNavigate();
  const { type } = JSON.parse(localStorage.getItem("@foodExplorer:user"));

  async function handleFavoriteFood(meal_id) {
    await api.post("/favorite_foods", { meal_id });
    alert("Prato adicionado aos favoritos")
  }

  function handleImage(image) {
    const mealImageUrl = image
      ? `${api.defaults.baseURL}/files/${image}`
      : imagePlaceholder;

    return mealImageUrl;
  }

  function handleMealDetails(id) {
    navigateTo(`/detailsMeal/${id}`);
  }

  function handleEditMeal(id) {
    navigateTo(`/formMeal/${id}`);
  }

  function handleAddMealToCart(meal) {
    setCart((cart) => [...cart, meal]);
  } 

  useEffect(() => {
    async function fetchMeals() {
      const response = await api.get(`/meals?name=${SearchBar.search}`);
      setMeals(response.data);
    }

    fetchMeals();
  }, [SearchBar.search]);

  return (
    <Container>
      <Header mode={true} id="Header" userType={type} cartUnity={cart} />
      <Main>
        <div id="Banner">
          <img src={Macarrons} alt="Macarrons" />
          <h2>Sabores inigualáveis</h2>
          <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
        </div>

        <section>
          <h3>Refeições</h3>
          <div id="Carousel">
            {meals &&
              meals.filter((meal) => meal.category == "meal").map((meal) =>
                type == "Client" ? (
                  <div id="Meal" key={String(meal.id)}>
                    <button id="Svg" type="button" onClick={() => handleFavoriteFood(meal.id)}>
                      <img src={Heart} />
                    </button>
                    <div onClick={() => handleMealDetails(meal.id)}>
                      <img src={handleImage(meal.image)} id="ImageMeal" />
                    </div>
                    <h1>{meal.name}</h1>
                    <span id="Price">{"R$ " + meal.price}</span>
                    <Counter
                      id={meal.id}
                      mealsUnity={mealsUnity}
                      setMealsUnity={setMealsUnity}
                    />
                    <Button title="Incluir" id="Button" onClick={() => handleAddMealToCart(meal)} />
                  </div>
                ) : (
                  <div id="Meal" key={String(meal.id)}>
                    <button id="Svg" type="button" onClick={() => handleEditMeal(meal.id)}>
                      <img src={Pencil} />
                    </button>
                    <div onClick={() => handleMealDetails(meal.id)}>
                      <img src={handleImage(meal.image)} id="ImageMeal" />
                    </div>
                    <h1>{meal.name}</h1>
                    <span id="Price">{"R$ " + meal.price}</span>
                  </div>
                )
              )}
          </div>
        </section>

        <section>
          <h3>Pratos principais</h3>
          <div id="Carousel">
            {meals &&
              meals.filter((meal) => meal.category == "dessert").map((meal) =>
                type == "Client" ? (
                  <div id="Meal" key={String(meal.id)}>
                    <button id="Svg" type="button" onClick={() => handleFavoriteFood(meal.id)}>
                      <img src={Heart} />
                    </button>
                    <img src={handleImage(meal.image)} id="ImageMeal" />
                    <h1>{meal.name}</h1>
                    <span id="Price">{"R$ " + meal.price}</span>
                    <Counter
                      id={meal.id}
                      mealsUnity={mealsUnity}
                      setMealsUnity={setMealsUnity}
                    />
                    <Button title="Incluir" id="Button" onClick={() => handleAddMealToCart(meal)} />
                  </div>
                ) : (
                  <div id="Meal" key={String(meal.id)}>
                    <button id="Svg" type="button" onClick={() => handleEditMeal(meal.id)}>
                      <img src={Pencil} />
                    </button>
                    <div onClick={() => handleMealDetails(meal.id)}>
                      <img src={handleImage(meal.image)} id="ImageMeal" />
                    </div>
                    <h1>{meal.name}</h1>
                    <span id="Price">{"R$ " + meal.price}</span>
                  </div>
                )
              )}
          </div>
        </section>

        <section>
          <h3>Pratos principais</h3>
          <div id="Carousel">
            {meals &&
              meals.filter((meal) => meal.category == "drink").map((meal) =>
                type == "Client" ? (
                  <div id="Meal" key={String(meal.id)}>
                    <button id="Svg" type="button" onClick={() => handleFavoriteFood(meal.id)}>
                      <img src={Heart} />
                    </button>
                    <img src={handleImage(meal.image)} id="ImageMeal" />
                    <h1>{meal.name}</h1>
                    <span id="Price">{"R$ " + meal.price}</span>
                    <Counter
                      id={meal.id}
                      mealsUnity={mealsUnity}
                      setMealsUnity={setMealsUnity}
                    />
                    <Button title="Incluir" id="Button" onClick={() => handleAddMealToCart(meal)} />
                  </div>
                ) : (
                  <div id="Meal" key={String(meal.id)}>
                    <button id="Svg" type="button" onClick={() => handleEditMeal(meal.id)}>
                      <img src={Pencil} />
                    </button>
                    <div onClick={() => handleMealDetails(meal.id)}>
                      <img src={handleImage(meal.image)} id="ImageMeal" />
                    </div>
                    <h1>{meal.name}</h1>
                    <span id="Price">{"R$ " + meal.price}</span>
                  </div>
                )
              )}
          </div>
        </section>
      </Main>
      <Footer />
    </Container>
  );
}
export class SearchBar {
  static search = "";
}