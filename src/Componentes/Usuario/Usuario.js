import React from "react";
import { Route, Routes } from "react-router-dom";
import HeaderUsuario from "./HeaderUsuario/HeaderUsuario";
import Feed from "../Feed/Feed.js";
import PostarFotoUsuario from "./PostarFotoUsuario/PostarFotoUsuario";
import EstatisticasUsuario from "./EstatisticasUsuario/EstatisticasUsuario";

const Usuario = () => {
    return (
        <section className="container">
            <HeaderUsuario />

            <Routes>
                <Route path="/" element={<Feed />} />
                <Route path="postar" element={<PostarFotoUsuario />} />
                <Route path="estatisticas" element={<EstatisticasUsuario />} />
            </Routes>
        </section>
    );
};

export default Usuario;
