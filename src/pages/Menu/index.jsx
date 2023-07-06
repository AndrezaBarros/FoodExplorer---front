import { Container } from "./style";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { IoSearchOutline } from "react-icons/io5";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Footer } from "../../components/Footer";
import { useAuth } from "../../hooks/auth";
import { ButtonText } from "../../components/ButtonText";
import { api } from "../../services/api";

export function Menu() {
  const { signOut } = useAuth();
  const [menuItem, setMenuItem] = useState();
  const navigateTo = useNavigate();

  function handleSignOut() {
    signOut();

    navigateTo(-1);
  }

  useEffect(() => {
    async function fetchUserType() {
      const userType = await api.get("users");
      setMenuItem(userType);
    }

    fetchUserType();
  }, []);

  return (
    <Container>
      <Header mode={false} />
      <main id="Main">
        <Input
          icon={IoSearchOutline}
          placeholder="Busque por pratos ou ingredientes"
        />
        <section id="Links">
          {menuItem == "cliente" ? (
            <div>
              <ButtonText title="Sair" onClick={handleSignOut} id="ButtonText"/>
            </div>
          ) : (
            <div>
              <ButtonText title="Novo Prato" id="ButtonText" to="/editMeal"/>
              <ButtonText title="Sair" onClick={handleSignOut} id="ButtonText"/>
            </div>
          )}
        </section>
      </main>
      <Footer id="footer" />
    </Container>
  );
}
