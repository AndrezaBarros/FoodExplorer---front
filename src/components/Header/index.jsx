/* eslint-disable react/prop-types */
import { Container, Order } from "./style";

import { ButtonText } from "../ButtonText";
import PolygonLogo from "../../assets/svg/Polygon 2.svg";
import Receipt from "../../assets/svg/Receipt.svg";
import Menu from "../../assets/svg/Menu.svg";
import Close from "../../assets/svg/Close.svg";

export function Header({ mode }) {
  return (
    <Container>
      {mode ? (
        <main id="Home">
          <ButtonText img={Menu} />

          <section id="logo">
            <img src={PolygonLogo} alt="logo" />
            <span>food explorer</span>
          </section>

          <Order>
            <img src={Receipt} alt="receipt" />
            <label>
              <button>0</button>
              <input id="order" type="file" />
            </label>
          </Order>
        </main>
      ) : (
        <main id="Menu">
          <ButtonText img={Close} />
          <h1>Menu</h1>
        </main>
      )}
    </Container>
  );
}
