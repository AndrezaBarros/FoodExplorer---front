import { Container, Form } from "./style";

import Polygon from "../../assets/svg/Polygon 2.svg";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

export function SignUp() {
  return (
    <Container>
      <section id="logo">
        <img src={Polygon} alt="Logo" />
        <h1>food explorer</h1>
      </section>

      <Form>
        <span>Seu nome</span>
        <Input placeholder="Exemplo: Maria da Silva"/>
      </Form>

      <Form>
        <span>Email</span>
        <Input placeholder="Exemplo: exemplo@exemplo.com.br"/>
      </Form>

      <Form>
        <span>Senha</span>
        <Input placeholder="No mínimo 6 caracteres"/>
      </Form>

      <Button title="Criar conta" />

      <ButtonText title="Já tenho uma conta"/>
    </Container>
  );
}
