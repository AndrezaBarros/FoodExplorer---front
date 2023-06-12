import { Container, Order } from "./style";
import { HiOutlineMenu } from "react-icons/hi";

import { ButtonText } from "../ButtonText";
import PolygonLogo from "../../assets/Polygon 2.svg";
import Receipt from "../../assets/Receipt.svg";

export function Header() {
  return (
    <Container>
      <main>
        <ButtonText icon={HiOutlineMenu} />

        <section id="logo">
          <img src={PolygonLogo} alt="logo" />
          <span>food explorer</span>
        </section>

        <Order>
          <img src={Receipt} alt="logo" />
          <label>
            <button>0</button>
            <input id="order" type="file"/>
          </label>
        </Order>
      </main>
    </Container>
  );
}
