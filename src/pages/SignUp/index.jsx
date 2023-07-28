import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContainerMobile, FormMobile, ContainerDesktop, FormDesktop } from "./style";
import { useMediaQuery } from "@uidotdev/usehooks";

import Polygon from "../../assets/svg/Polygon 2.svg";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigateTo = useNavigate();
  const desktopWidth = useMediaQuery("only screen and (min-width : 1368px)");

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Por favor preencher todos os campos");
    }

    if (password < 6) {
      return alert("A senha deve conter 6 ou mais caracteres")
    }

    navigateTo("/userType");

    localStorage.setItem("@foodExplorer:name", name);
    localStorage.setItem("@foodExplorer:email", email);
    localStorage.setItem("@foodExplorer:password", password);

  }

  if (!desktopWidth) {
    return (
      <ContainerMobile>
        <section id="logo">
          <img src={Polygon} alt="Logo" />
          <h1>food explorer</h1>
        </section>

        <FormMobile>
          <span>Seu nome</span>
          <Input
            placeholder="Exemplo: Maria da Silva"
            onChange={(e) => setName(e.target.value)}
          />
        </FormMobile>

        <FormMobile>
          <span>Email</span>
          <Input
            placeholder="Exemplo: exemplo@exemplo.com.br"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormMobile>

        <FormMobile>
          <span>Senha</span>
          <Input
            placeholder="No mínimo 6 caracteres"
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormMobile>

        <Button title="Criar conta" onClick={handleSignUp} />

        <ButtonText title="Já tenho uma conta" to="/" id="ButtonText" />
      </ContainerMobile>
    );
  }

  return (
    <ContainerDesktop>
      <section id="logo">
        <img src={Polygon} alt="Logo" />
        <h1>food explorer</h1>
      </section>

      <div>
        <h2>Crie sua conta</h2>
        <FormDesktop>
          <span>Seu nome</span>
          <Input
            placeholder="Exemplo: Maria da Silva"
            onChange={(e) => setName(e.target.value)}
            id="Input"
          />
        </FormDesktop>

        <FormDesktop>
          <span>Email</span>
          <Input
            placeholder="Exemplo: exemplo@exemplo.com.br"
            onChange={(e) => setEmail(e.target.value)}
            id="Input"
          />
        </FormDesktop>

        <FormDesktop>
          <span>Senha</span>
          <Input
            placeholder="No mínimo 6 caracteres"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            id="Input"
          />
        </FormDesktop>

        <Button title="Criar conta" onClick={handleSignUp} id="Button" />

        <ButtonText title="Já tenho uma conta" id="ButtonText" to="/" />
      </div>
    </ContainerDesktop>
  )

}
