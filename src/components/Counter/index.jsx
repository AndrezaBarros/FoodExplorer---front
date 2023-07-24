/* eslint-disable react/prop-types */
import { Container } from "./style";

import { useState } from "react";
import Add from "../../assets/svg/Plus.svg";
import Decrement from "../../assets/svg/Minus.svg";

export function Counter({ id, mealsUnity, setMealsUnity, initialValue, price, setOrderValue}) {
  const [unity, setUnity] = useState(initialValue || 0);

  function onClickPlus() {
    let mealUnity = mealsUnity.find((x) => x.id == id);

    if (mealUnity) {
      mealUnity.unity++;

      setUnity(mealUnity.unity);
      setOrderValue(price * mealUnity.unity);
    } else {
      mealsUnity.push({ id: id, unity: 1 });
      setUnity(1);
    }

    setMealsUnity(mealsUnity);
  }

  function onClickDecrement() {
    let mealUnity = mealsUnity.find((x) => x.id == id);

    if (mealUnity && mealUnity.unity > 0) {
      mealUnity.unity--;

      setUnity(mealUnity.unity);
      setMealsUnity(mealsUnity);
      setOrderValue(price * mealUnity.unity);
    }
  }

  return (
    <Container>
      <button onClick={onClickDecrement}>
        <img src={Decrement} alt="Decrement" />
      </button>
      <span>{unity}</span>
      <button onClick={onClickPlus}>
        <img src={Add} alt="Add" />
      </button>
    </Container>
  );
}
