import React from "react";
import Imagem from "../../Feedback/Imagem/Imagem";
import estilos from "./FeedPhotosItem.module.css";

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
    return (
        <li className={estilos.photo} onClick={() => setModalPhoto(photo)} >
            <Imagem src={photo.src} alt={photo.title} />
            <span>{photo.acessos}</span>
        </li>
    );
};

export default FeedPhotosItem;
