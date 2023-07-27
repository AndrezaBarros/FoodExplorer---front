import { ContainerMobile, MainMobile, ContainerDesktop, MainDesktop } from "./style";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useMediaQuery } from "@uidotdev/usehooks";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { Counter } from "../../components/Counter";
import { api } from "../../services/api";

import CaretLeft from "../../assets/svg/CaretLeft.svg";
import Receipt from "../../assets/svg/Receipt.svg";

export function DetailsMeal() {
  const [data, setData] = useState();
  const [mealsUnity, setMealsUnity] = useState([]);
  const [orderValue, setOrderValue] = useState();
  const [cart, setCart] = useState([]);

  const params = useParams(null);
  const { type } = JSON.parse(localStorage.getItem("@foodExplorer:user"));
  const navigateTo = useNavigate();
  const desktopWidth = useMediaQuery("only screen and (min-width : 1368px)");

  function handleEditMeal(id) {
    navigateTo(`/formMeal/${params.id}`);
  }

  function handleAddMealToCart(meal) {
    setCart([meal]);
  }

  useEffect(() => {
    async function fetchMeal() {
      const response = await api.get(`/meals/${params.id}`);
      setData(response.data);
      setOrderValue(response.data.price)
      setMealsUnity([{
        id: response.data.id,
        unity: 1
      }]);
    }
    fetchMeal();
  }, [])

  if (!desktopWidth) {
    return (
      <ContainerMobile>
        <Header mode={true} cartUnity={cart} />
        {
          data && (
            <MainMobile>
              <ButtonText img={CaretLeft} title="voltar" id="ButtonText" to={-1} />
              <div id="Meal"><img src={`${api.defaults.baseURL}/files/` + data.image} alt="Meal" /></div>
              <h1>{data.name}</h1>
              <p>{data.description}</p>

              {data.ingredients && (
                <div id="Tags">
                  {data.ingredients.map((ingredient) => (
                    <span key={String(ingredient.id)}>{ingredient.name}</span>
                  ))}
                </div>
              )}

              {
                type == "Client" ? (<div id="Order">
                  <Counter id={data.id} mealsUnity={mealsUnity} setMealsUnity={setMealsUnity} initialValue={1} setOrderValue={setOrderValue} price={data.price} />
                  <Button title={`pedir • R$ ${parseFloat(String(orderValue)).toFixed(2).replace(".", ",")}`} img={Receipt} id="Button" onClick={() => handleAddMealToCart(data)} />
                </div>) : (<div id="Order">
                  <Button title="Editar prato" id="ButtonRestaurant" onClick={() => handleEditMeal(data.id)} />
                </div>)
              }

            </MainMobile>
          )
        }
        <Footer />
      </ContainerMobile>
    );
  }

  return (
    <ContainerDesktop>
      <Header mode={true} cartUnity={cart} />
      <ButtonText img={CaretLeft} title="voltar" id="ButtonText" to={-1} />
      {
        data && (
          <MainDesktop>
            <div id="Meal"><img src={`${api.defaults.baseURL}/files/` + data.image} alt="Meal" /></div>
            <div id="Details">
              <h1>{data.name}</h1>
              <p>{data.description}</p>

              {data.ingredients && (
                <div id="Tags">
                  {data.ingredients.map((ingredient) => (
                    <span key={String(ingredient.id)}>{ingredient.name}</span>
                  ))}
                </div>
              )}

              {
                type == "Client" ? (<div id="Order">
                  <Counter id={data.id} mealsUnity={mealsUnity} setMealsUnity={setMealsUnity} initialValue={1} setOrderValue={setOrderValue} price={data.price} />
                  <Button title={`pedir • R$ ${parseFloat(String(orderValue)).toFixed(2).replace(".", ",")}`} img={Receipt} id="Button" onClick={() => handleAddMealToCart(data)} />
                </div>) : (<div id="Order">
                  <Button title="Editar prato" id="ButtonRestaurant" onClick={() => handleEditMeal(data.id)} />
                </div>)
              }

            </div>
          </MainDesktop>
        )
      }
      <Footer />
    </ContainerDesktop>
  );

}
