import React from "react";
import MainLayout from "./layout/MainLayout";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import NotFound from "../src/pages/NotFound";
import LoginPage from "../src/pages/LoginPage";
import SignupPage from "../src/pages/SignupPage";
import ForgotPwPage from "../src/pages/ForgotPwPage";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/forgotpw" element={<ForgotPwPage />} />
          <Route path="/main/*" element={<MainLayout />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;