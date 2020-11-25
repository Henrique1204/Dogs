import React from "react";
import estilos from "./FeedPhotosItem.module.css";

const FeedPhotosItem = ({photo}) => {
    return (
        <li className={estilos.photo}>
            <img src={photo.src} alt={photo.title} />
            <span>{photo.acessos}</span>
        </li>
    );
};

export default FeedPhotosItem;
