/* eslint-disable react/prop-types */
import { Container } from "./style";

export function Button({title, img, ...rest}) {
    return (
        <Container
            type="button"
            {...rest}
        >
           {img && <img src={img}/>}
           {title}
        </Container>
    )
}