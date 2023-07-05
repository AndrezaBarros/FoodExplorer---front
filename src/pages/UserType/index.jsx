import { Container } from "./style";
import { useState } from "react";
import {useNavigate} from "react-router-dom";

import Polygon from "../../assets/svg/Polygon 2.svg";
import Person from "../../assets/svg/Person.svg";
import Restaurant from "../../assets/svg/Restaurant.svg";
import { Button } from "../../components/Button";

import { api } from "../../services/api";

export function UserType() {
  const [userType, setUserType] = useState();
  const name = localStorage.getItem("@foodExplorer:name");
  const email = localStorage.getItem("@foodExplorer:email");
  const password = localStorage.getItem("@foodExplorer:password");

  const navigateTo = useNavigate();

  function onClickPerson() {
    setUserType();
    setUserType("Client");
  }

  function onClickRestaurant() {
    setUserType();
    setUserType("Restaurant");
  }

  function handleFinishRegister() {
    if (!userType) {
      return alert("Por favor escolha um tipo de usuário");
    }

    api
      .post("/users", { name, email, password, type: userType })
      .then(() => {
        alert("Conta criada com sucesso");

        navigateTo("/");
      })
      .catch((error) => {
        if (error.message) {
          alert(error.response.data.message);

          navigateTo("/signUp")
        } else {
          alert("Não foi possível concluir o cadastro");

          navigateTo("/signUp")
        }
      });
  }

  return (
    <Container>
      <section id="Logo">
        <img src={Polygon} alt="Polygon" />
        <h1>food explorer</h1>
      </section>

      <button id="UserType" onClick={onClickPerson}>
        <img src={Person} alt="Person" />
        <h2>Sou um cliente</h2>
      </button>
      <button id="UserType" onClick={onClickRestaurant}>
        <img src={Restaurant} alt="Restaurant" />
        <h2>Sou um restaurante</h2>
      </button>

      <Button title="Finalizar conta" onClick={handleFinishRegister}/>
    </Container>
  );
}
