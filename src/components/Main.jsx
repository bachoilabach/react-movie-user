import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import MovieDetail from "../pages/MovieDetail";

const NavPage = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/detail" element={<MovieDetail/>} />
      </Routes>
    </>
  );
};

export default NavPage;
