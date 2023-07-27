/* eslint-disable react/prop-types */
import { ContainerMobile, OrderMobile, ContainerDesktop } from "./style";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@uidotdev/usehooks";

import { ButtonText } from "../ButtonText";
import { Button } from "../Button";
import { Input } from "../Input";
import { useAuth } from "../../hooks/auth";

import PolygonLogo from "../../assets/svg/Polygon 2.svg";
import Receipt from "../../assets/svg/Receipt.svg";
import Menu from "../../assets/svg/Menu.svg";
import Close from "../../assets/svg/Close.svg";
import SignOut from "../../assets/svg/SignOut.svg";
import Search from "../../assets/svg/search.svg";
import { SearchBar } from "../../pages/Home";

export function Header({ mode, userType, cartUnity, setSearch }) {
  const navigateTo = useNavigate();
  const { signOut } = useAuth();
  const { type } = JSON.parse(localStorage.getItem("@foodExplorer:user"));

  const desktopWidth = useMediaQuery("only screen and (min-width : 1368px)");

  function handleSignOut() {
    signOut();

    navigateTo("/");
  }

  function handleSearch(event) {
    SearchBar.search = event.target.value;
    if (setSearch)
      setSearch(event.target.value);
  }

  function handleNewMeal(id) {
    navigateTo("/formMeal/-1");
  }

  if (!desktopWidth) {
    return (
      <ContainerMobile>
        {mode ? (
          <main id="Home">
            <ButtonText img={Menu} to="/Menu" />

            <section id="logo">
              <img src={PolygonLogo} alt="logo" />
              <span onClick={() => navigateTo("/")}>food explorer</span>
              {userType == "Restaurant" ? <span id="Admin">admin</span> : null}
            </section>

            {userType != "Restaurant" ? (
              <OrderMobile>
                <img src={Receipt} alt="receipt" />
                <label>
                  <button>{cartUnity != undefined ? cartUnity.length : 0}</button>
                  <input id="order" type="file" />
                </label>
              </OrderMobile>
            ) : (
              <span></span>
            )}
          </main>
        ) : (
          <main id="Menu">
            <ButtonText img={Close} to="/" />
            <h1>Menu</h1>
          </main>
        )}
      </ContainerMobile>
    );
  }

  return (
    <ContainerDesktop>
      <main id="Main">
        {
          type == "Restaurant" ?
            <section id="logo">
              <img src={PolygonLogo} alt="logo" />
              <span onClick={() => navigateTo("/")}>food explorer</span>
              <span id="Admin">admin</span>
            </section>
            :
            <section id="logo">
              <img src={PolygonLogo} alt="logo" />
              <span onClick={() => navigateTo("/")}>food explorer</span>
            </section>
        }

        <div>
          <img src={Search} alt="Lupa" />
          <input
            placeholder="Busque por pratos ou ingredientes"
            onChange={(e) => handleSearch(e)}
            id="Input"
          />
        </div>

        {
          type == "Client" ?
            <div id="divButtonText" >
              <ButtonText title="Meus favoritos" id="Favorites" to="/favorites" />
            </div>
            :
            null
        }

        {
          type != "Restaurant" ?
            <Button img={Receipt} title={`Pedido (${cartUnity != undefined ? cartUnity.length : 0})`} id="Button" />
            :
            <Button title="Novo prato" id="Button" onClick={handleNewMeal} />
        }

        <ButtonText img={SignOut} onClick={handleSignOut} />
      </main>
    </ContainerDesktop>
  );

}