import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Componentes/Header/Header.js";
import Home from "./Componentes/Home.js";
import Login from "./Componentes/Login/Login.js";
import Footer from "./Componentes/Footer/Footer.js";


function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} ></Route>
        {/* IMPORTANTE: Login terá subrotas, por isso é preciso adicionar o '/*' */}
        <Route path="/login/*" element={<Login />} ></Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
