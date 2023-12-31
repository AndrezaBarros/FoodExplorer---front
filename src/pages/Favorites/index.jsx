import { Container, MainMobile, MainDesktop } from "./style";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { api } from "../../services/api";

export function Favorites() {
    const [foods, setFoods] = useState([]);
    const desktopWidth = useMediaQuery("only screen and (min-width : 1368px)");

    async function handleRemoveFavoriteFood(id) {
        await api.delete(`/favorite_foods/${id}`);

        alert("Prato removido dos favoritos");
    }

    useEffect(() => {
        async function fetchFoods() {
            const response = await api.get("favorite_foods");
            setFoods(response.data);
        }
        fetchFoods()
    }, [foods]);

    if (!desktopWidth) {
        return (<Container>
            <Header mode={true} />
            <MainMobile>
                <h1>Meus favoritos</h1>
                {
                    foods && (
                        foods.map((food) =>
                            <section key={food.id}>
                                <img src={`${api.defaults.baseURL}/files/` + food.image} alt="Imagem" id="Img" />
                                <div>
                                    <h2>{food.name}</h2>
                                    <button type="button" onClick={() => handleRemoveFavoriteFood(food.id)}>Remover dos Favoritos</button>
                                </div>
                            </section>
                        )
                    )
                }
            </MainMobile>
            <Footer />
        </Container>)
    }

    return (<Container>
        <Header mode={true} />
        <MainDesktop>
            <h1>Meus favoritos</h1>
            <div id="List">
                {
                    foods && (
                        foods.map((food) =>

                            <section key={food.id}>
                                <img src={`${api.defaults.baseURL}/files/` + food.image} alt="Imagem" id="Img" />
                                <div>
                                    <h2>{food.name}</h2>
                                    <button type="button" onClick={() => handleRemoveFavoriteFood(food.id)}>Remover dos Favoritos</button>
                                </div>
                            </section>
                        )
                    )
                }
            </div>
        </MainDesktop>
        <Footer />
    </Container>)
}