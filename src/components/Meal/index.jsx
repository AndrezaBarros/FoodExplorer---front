/* eslint-disable react/prop-types */
import {Container} from "./style";

export function Meal({icon: Icon, image, name, price, counter, button: Button}) {
    return (
        <Container>
            {Icon && <Icon size={24}/>}
            {image}
            {name}
            {price}
            {counter}
            {Button && <Button/>}
        </Container>
    )
}