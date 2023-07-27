import { useState } from "react";
import { ContainerMobile, FormMobile, ContainerDesktop, FormDesktop } from "./style";

import Polygon from "../../assets/svg/Polygon 2.svg";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { useAuth } from "../../hooks/auth";

import { useMediaQuery } from "@uidotdev/usehooks";

export function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { signIn } = useAuth();

  const desktopWidth = useMediaQuery("only screen and (min-width : 1368px)");

  function handleSignIn() {
    signIn({ email, password });
  }

  if (!desktopWidth) {
    return (
      <ContainerMobile>
        <section id="logo">
          <img src={Polygon} alt="Logo" />
          <h1>food explorer</h1>
        </section>

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
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormMobile>

        <Button title="Entrar" onClick={handleSignIn} id="Button" />

        <ButtonText title="Criar uma conta" id="ButtonText" to="/signUp" />
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
        <h2>Faça Login</h2>
        <FormDesktop>
          <span>Email</span>
          <input
            placeholder="Exemplo: exemplo@exemplo.com.br"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormDesktop>

        <FormDesktop>
          <span>Senha</span>
          <input
            placeholder="No mínimo 6 caracteres"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormDesktop>

        <Button title="Entrar" onClick={handleSignIn} id="Button" />

        <ButtonText title="Criar uma conta" id="ButtonText" to="/signUp" />
      </div>
    </ContainerDesktop>
  )

}
