import { Routes, Route } from "react-router-dom";

import { DetailsMeal } from "../pages/DetailsMeal";
import { FormMeal } from "../pages/FormMeal";
import { Favorites } from "../pages/Favorites";
import { Home } from "../pages/Home";
import { Menu } from "../pages/Menu";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/detailsMeal/:id" element={<DetailsMeal/>} />
      <Route path="/formMeal/:id" element={<FormMeal/>} />
      <Route path="/favorites" element={<Favorites/>} />
      <Route path="/" element={<Home/>} />
      <Route path="/Menu" element={<Menu/>} />
    </Routes>
  );
}
