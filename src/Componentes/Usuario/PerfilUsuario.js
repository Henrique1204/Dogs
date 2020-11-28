import React from "react";
import { useParams } from "react-router-dom";
import Feed from "../Feed/Feed";
import Head from "../Head";

const PerfilUsuario = () => {
    const { user } = useParams();

    return (
        <section className="container mainContainer">
            <Head title={user} description="Perfil do usuário com o feed de fotos." />
            <h1 className="titulo">{user}</h1>
            <Feed user={user} />
        </section>
    );
};

export default PerfilUsuario;
