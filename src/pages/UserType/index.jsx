import { Container } from "./style";

import Polygon from "../../assets/svg/Polygon 2.svg";
import Person from "../../assets/svg/Person.svg";
import Restaurant from "../../assets/svg/Restaurant.svg";
import {Button} from "../../components/Button";

export function UserType() {
    return (<Container>
        <section id="Logo">
            <img src={Polygon} alt="Polygon" />
            <h1>food explorer</h1>
        </section>

        <div>
            <img src={Person} alt="Person" />
            <h2>Sou um cliente</h2>
        </div>
        <div>
            <img src={Restaurant} alt="Restaurant" />
            <h2>Sou um restaurante</h2>
        </div>

        <Button title="Prosseguir"/>
    </Container>)
}