/* eslint-disable react/prop-types */
import { Container } from "./style";
import { useNavigate } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Footer } from "../../components/Footer";
import { useAuth } from "../../hooks/auth";
import { ButtonText } from "../../components/ButtonText";

// eslint-disable-next-line no-unused-vars
export function Menu({ search, setSearch }) {
  const { signOut } = useAuth();
  const { type } = JSON.parse(localStorage.getItem("@foodExplorer:user"));
  const navigateTo = useNavigate();

  function handleSignOut() {
    signOut();

    navigateTo(-1);
  }

  return (
    <Container>
      <Header mode={false} />
      <main id="Main">
        <Input
          icon={IoSearchOutline}
          placeholder="Busque por pratos ou ingredientes"
          onChange={(e) => setSearch(e.target.value)}
        />
        <section id="Links">
          {type != "Restaurant" ? (
            <div>
              <ButtonText
                title="Sair"
                onClick={handleSignOut}
                id="ButtonText"
              />
            </div>
          ) : (
            <div>
              <ButtonText title="Novo Prato" id="ButtonText" to="/formMeal" />
              <ButtonText
                title="Sair"
                onClick={handleSignOut}
                id="ButtonText"
              />
            </div>
          )}
        </section>
      </main>
      <Footer id="footer" />
    </Container>
  );
}
