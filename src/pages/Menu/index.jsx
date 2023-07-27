/* eslint-disable react/prop-types */
import { Container } from "./style";
import { useNavigate } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Footer } from "../../components/Footer";
import { useAuth } from "../../hooks/auth";
import { ButtonText } from "../../components/ButtonText";
import { SearchBar } from "../Home";
import Search from "../../assets/svg/search.svg";

// eslint-disable-next-line no-unused-vars
export function Menu() {
  const search = SearchBar.search
  const { signOut } = useAuth();
  const { type } = JSON.parse(localStorage.getItem("@foodExplorer:user"));
  const navigateTo = useNavigate();

  function handleSignOut() {
    signOut();

    navigateTo(-1);
  }

  function handleSearch(event) {
    SearchBar.search = event.target.value
  }

  return (
    <Container>
      <Header mode={false} />
      <main id="Main">
        <Input
          img={Search}
          placeholder="Busque por pratos ou ingredientes"
          onChange={(e) => handleSearch(e)}
        />
        <section id="Links">
          {type != "Restaurant" ? (
            <div>
              <ButtonText
                title="Meus Favoritos"
                id="ButtonText"
                to="/favorites"
              />
              <ButtonText
                title="Sair"
                onClick={handleSignOut}
                id="ButtonText"
              />
            </div>
          ) : (
            <div>
              <ButtonText title="Novo Prato" id="ButtonText" to="/formMeal/-1" />
              <ButtonText
                title="Sair"
                onClick={handleSignOut}
                type="button"
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
