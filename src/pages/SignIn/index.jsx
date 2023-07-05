import { useState } from "react";
import { Container, Form } from "./style";

import Polygon from "../../assets/svg/Polygon 2.svg";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { useAuth } from "../../hooks/auth";

export function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password });
  }

  return (
    <Container>
      <section id="logo">
        <img src={Polygon} alt="Logo" />
        <h1>food explorer</h1>
      </section>

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
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form>

      <Button title="Entrar" onClick={handleSignIn} />

      <ButtonText title="Criar uma conta" id="ButtonText" to="/signUp" />
    </Container>
  );
}
