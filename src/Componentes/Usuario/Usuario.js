import React from "react";
import { Route, Routes } from "react-router-dom";
import HeaderUsuario from "./HeaderUsuario/HeaderUsuario";
import Feed from "../Feed/Feed.js";
import PostarFotoUsuario from "./PostarFotoUsuario/PostarFotoUsuario";
import EstatisticasUsuario from "./EstatisticasUsuario/EstatisticasUsuario";
import RotaDesconhecida from "../RotaDesconhecida";
import Head from "../Head";
import { useSelector } from "react-redux";

const Usuario = () => {
    const { dados }  = useSelector((state) => state.user);

    return (
        <section className="container">
            <Head title="Minha conta" />

            <HeaderUsuario />

            <Routes>
                <Route path="/" element={<Feed user={dados.id} />} />
                <Route path="postar" element={<PostarFotoUsuario />} />
                <Route path="estatisticas" element={<EstatisticasUsuario />} />
                <Route path="*" element={<RotaDesconhecida />} ></Route>
            </Routes>
        </section>
    );
};

export default Usuario;
