/* eslint-disable react/prop-types */
import {Container} from "./style";

export function ButtonText({title, img, ...rest}) {
    return (
        <Container
            {...rest}
        >
            {img && <img src={img}/>}
            {title}
        </Container>
    )
}