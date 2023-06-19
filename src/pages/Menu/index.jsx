import { Container } from "./style";

import { IoSearchOutline } from "react-icons/io5";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Footer } from "../../components/Footer";

export function Menu() {
  return (
    <Container>
      <Header mode={false} />
      <main id="Main">
        <Input
          icon={IoSearchOutline}
          placeholder="Busque por pratos ou ingredientes"
        />
        <section id="Links">
          <div>
            <a href="/">Sair</a>
          </div>
        </section>
      
      </main>
      <Footer id="footer" />
    </Container>
  );
}
