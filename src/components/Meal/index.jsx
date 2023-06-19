/* eslint-disable react/prop-types */
import { Container } from "./style";
import Add from "../../assets/svg/Plus.svg";
import Decrement from "../../assets/svg/Minus.svg";

import { Button } from "../Button";

export function Meal({ svg, imageMeal, name, price, counter, button: title }) {
  return (
    <Container>
      {<img src={svg} id="Svg"/>}
      {<img src={imageMeal} id="ImageMeal" />}
      <h1>{name}</h1>
      <span id="Price">{price}</span>
      {counter && <div id="Counter">
        <button>
          <img src={Decrement} alt="Decrement" />
        </button>
        <span>01</span>
        <button>
          <img src={Add} alt="Add" />
        </button>
      </div>}

      {title && <Button title={title} id="Button"/>}
    </Container>
  );
}
