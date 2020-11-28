import React from "react";
import { Route, Routes } from "react-router-dom";
import HeaderUsuario from "./HeaderUsuario/HeaderUsuario";
import Feed from "../Feed/Feed.js";
import PostarFotoUsuario from "./PostarFotoUsuario/PostarFotoUsuario";
import EstatisticasUsuario from "./EstatisticasUsuario/EstatisticasUsuario";
import { UserContext } from "../../UserContext";
import RotaDesconhecida from "../RotaDesconhecida";

const Usuario = () => {
    const { dados } = React.useContext(UserContext);

    return (
        <section className="container">
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
