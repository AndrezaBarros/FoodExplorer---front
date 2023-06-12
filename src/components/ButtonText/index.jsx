/* eslint-disable react/prop-types */
import {Container} from "./style";

export function ButtonText({title, icon: Icon, ...rest}) {
    return (
        <Container
            {...rest}
        >
            {Icon && <Icon size={32}/>}
            {title}
        </Container>
    )
}