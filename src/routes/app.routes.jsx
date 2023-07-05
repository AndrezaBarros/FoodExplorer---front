import { Routes, Route } from "react-router-dom";

import { DetailsMeal } from "../pages/DetailsMeal";
import { EditMeal } from "../pages/EditMeal";
import { Favorites } from "../pages/Favorites";
import { Home } from "../pages/Home";
import { Menu } from "../pages/Menu";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/detailsMeal" element={<DetailsMeal/>} />
      <Route path="/editMeal" element={<EditMeal/>} />
      <Route path="/favorites" element={<Favorites/>} />
      <Route path="/" element={<Home/>} />
      <Route path="/Menu" element={<Menu/>} />
    </Routes>
  );
}
