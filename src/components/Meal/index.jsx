/* eslint-disable react/prop-types */
import { Container } from "./style";

import { Button } from "../Button";

export function Meal({ svg, imageMeal, name, price, button: title }) {
  return (
    <Container>
      {<img src={svg} id="Svg"/>}
      {<img src={imageMeal} id="ImageMeal" />}
      <h1>{name}</h1>
      <span id="Price">{price}</span>

      {title && <Button title={title} id="Button"/>}
    </Container>
  );
}
