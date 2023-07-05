import { Routes, Route } from "react-router-dom";

import { UserType } from "../pages/UserType";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/userType" element={<UserType/>} />
      <Route path="/" element={<SignIn/>} />
      <Route path="/signUp" element={<SignUp/>} />
    </Routes>
  );
}
