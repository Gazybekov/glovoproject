import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Katalog from "./components/Katalog/Katalog";
import Nav from "./components/Nav/Nav";
import PartnersMain from "./components/Partners_page/PartnersMain";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />} />
          <Route path="/kata" element={<Katalog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
