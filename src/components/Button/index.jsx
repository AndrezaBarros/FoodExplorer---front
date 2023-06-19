/* eslint-disable react/prop-types */
import { Container } from "./style";

export function Button({title, icon: Icon, ...rest}) {
    return (
        <Container
            type="button"
            {...rest}
        >
           {Icon && <Icon size={20}/>}
           {title}
        </Container>
    )
}