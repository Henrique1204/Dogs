import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Componentes/Header/Header.js";
import Home from "./Componentes/Home.js";
import Login from "./Componentes/Login/Login.js";
import Footer from "./Componentes/Footer/Footer.js";
import Usuario from "./Componentes/Usuario/Usuario.js";
import RotaProtegida from "./Componentes/RotaProtegida";
import Photo from "./Componentes/Photo/Photo";
import PerfilUsuario from "./Componentes/Usuario/PerfilUsuario";
import RotaDesconhecida from "./Componentes/RotaDesconhecida";
import { useDispatch } from "react-redux";
import { autoLogin } from "./store/user";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(autoLogin());
  }, [dispatch]);

  return (
    <div className="App">
      {/* // Para usar as rotas. */}
      <BrowserRouter>
          {/* Conteúdo */}
          <Header />

          <main className="AppBody">
            {/* Cria as rotas */}
            <Routes>
              {/* Define as rotas */}
              <Route path="/" element={<Home />} ></Route>
              {/* IMPORTANTE: Login terá subrotas, por isso é preciso adicionar o '/*' */}
              <Route path="login/*" element={<Login />} ></Route>
              <RotaProtegida path="conta/*" element={<Usuario />} ></RotaProtegida>
              <Route path="foto/:id" element={<Photo />} ></Route>
              <Route path="perfil/:user" element={<PerfilUsuario />} ></Route>
              <Route path="*" element={<RotaDesconhecida />} ></Route>
            </Routes>
          </main>

          {/* Conteúdo */}
          <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
