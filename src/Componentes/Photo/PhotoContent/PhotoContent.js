import React from "react";
import { Link } from "react-router-dom";
import estilos from "./PhotoContent.module.css";
import PhotoComments from "../PhotoComments/PhotoComments.js";
import { UserContext } from "../../../UserContext";
import PhotoDelete from "../PhotoDelete/PhotoDelete";

const PhotoContent = ({ dados }) => {
    const user = React.useContext(UserContext);
    const { photo, comments } = dados;

    return (
        <div className={estilos.photo}>
            <div className={estilos.img}>
                <img src={photo.src} alt={photo.title}/>
            </div>

            <div className={estilos.details}>
                <p className={estilos.author}>
                    {
                        (user.dados && user.dados.username === photo.author) ? (
                            <PhotoDelete id={photo.id} />
                        ) : (
                            <Link to={`/perfil/${photo.author}`} >@{photo.author}</Link>   
                        )
                    }

                    <span className={estilos.visualizacoes}>{photo.acessos}</span>
                </p>

                <h1 className="titulo">
                    <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
                </h1>

                <ul className={estilos.atributos}>
                    <li>{photo.peso} Kg</li>
                    <li>{photo.idade} anos</li>
                </ul>
            </div>

            <PhotoComments id={photo.id} comments={comments} />
        </div>
    );
};

export default PhotoContent;
