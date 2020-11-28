import React from "react";
import { useParams } from "react-router-dom";
import Feed from "../Feed/Feed";

const PerfilUsuario = () => {
    const { user } = useParams();

    return (
        <section className="container mainContainer">
            <Feed user={user} />
        </section>
    );
};

export default PerfilUsuario;