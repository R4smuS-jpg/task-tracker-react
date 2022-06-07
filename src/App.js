import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "pages/Home/Home";
import SignIn from "pages/SignIn/SignIn";
import SignUp from "pages/SignUp/SignUp";

import { AuthUser } from "api/AuthUser";
import EnvSpecificRouter from "components/EnvSpecificRouter";

function App() {
  return (
    <AuthUser>
      <EnvSpecificRouter>
        <Routes>
          <Route path={"/sign-in"} element={<SignIn />}></Route>
          <Route path={"/sign-up"} element={<SignUp />}></Route>
          <Route path={"/"} element={<Home />}></Route>
        </Routes>
      </EnvSpecificRouter>
    </AuthUser>
  );
}

export default App;
