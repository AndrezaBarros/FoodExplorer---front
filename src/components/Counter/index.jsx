import { Container } from "./style";

import Add from "../../assets/svg/Plus.svg";
import Decrement from "../../assets/svg/Minus.svg";

export function Counter() {
  return (
    <Container>
      <button>
        <img src={Decrement} alt="Decrement" />
      </button>
      <span>01</span>
      <button>
        <img src={Add} alt="Add" />
      </button>
    </Container>
  );
}
