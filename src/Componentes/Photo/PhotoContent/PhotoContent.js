import React from "react";
import { Link } from "react-router-dom";
import estilos from "./PhotoContent.module.css";
import PhotoComments from "../PhotoComments/PhotoComments.js";
import { UserContext } from "../../../UserContext";
import PhotoDelete from "../PhotoDelete/PhotoDelete";
import Imagem from "../../Feedback/Imagem/Imagem";

const PhotoContent = ({ dados, single }) => {
    const user = React.useContext(UserContext);
    const { photo, comments } = dados;

    return (
        <div className={`${estilos.photo} ${single ? estilos.single : ""}`}>
            <div className={estilos.img}>
                <Imagem src={photo.src} alt={photo.title} />
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

            <PhotoComments id={photo.id} comments={comments} single={single} />
        </div>
    );
};

export default PhotoContent;
