import { Container } from "./style.js";

// eslint-disable-next-line react/prop-types
export function Input({ img, ...rest }) {
  return (
    <Container>
      <img src={img}/>
      <input {...rest} />
    </Container>
  );
}
