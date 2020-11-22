import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Componentes/Header/Header.js";
import Home from "./Componentes/Home.js";
import Login from "./Componentes/Login/Login.js";
import Footer from "./Componentes/Footer/Footer.js";
import { UserStorage } from "./UserContext.js";

function App() {
  return (
    // Para usar as rotas.
    <BrowserRouter>
      {/* Para usar o contexto de usuário. */}
      <UserStorage>
        {/* Conteúdo */}
        <Header />

        {/* Cria as rotas */}
        <Routes>
          {/* Define as rotas */}
          <Route path="/" element={<Home />} ></Route>
          {/* IMPORTANTE: Login terá subrotas, por isso é preciso adicionar o '/*' */}
          <Route path="/login/*" element={<Login />} ></Route>
        </Routes>

        {/* Conteúdo */}
        <Footer />
      </UserStorage>
    </BrowserRouter>
  );
}

export default App;
