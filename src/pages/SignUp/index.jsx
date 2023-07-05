import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form } from "./style";

import Polygon from "../../assets/svg/Polygon 2.svg";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigateTo = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Por favor preencher todos os campos");
    }

    navigateTo("/userType");

    localStorage.setItem("@foodExplorer:name", name);
    localStorage.setItem("@foodExplorer:email", email);
    localStorage.setItem("@foodExplorer:password", password);

  }

  return (
    <Container>
      <section id="logo">
        <img src={Polygon} alt="Logo" />
        <h1>food explorer</h1>
      </section>

      <Form>
        <span>Seu nome</span>
        <Input
          placeholder="Exemplo: Maria da Silva"
          onChange={(e) => setName(e.target.value)}
        />
      </Form>

      <Form>
        <span>Email</span>
        <Input
          placeholder="Exemplo: exemplo@exemplo.com.br"
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form>

      <Form>
        <span>Senha</span>
        <Input
          placeholder="No mínimo 6 caracteres"
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form>

      <Button title="Criar conta" onClick={handleSignUp} />

      <ButtonText title="Já tenho uma conta" to="/" id="ButtonText"/>
    </Container>
  );
}
