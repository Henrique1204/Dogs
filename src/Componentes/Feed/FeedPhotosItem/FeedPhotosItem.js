import React from "react";
import estilos from "./FeedPhotosItem.module.css";

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
    return (
        <li className={estilos.photo} onClick={() => setModalPhoto(photo)} >
            <img src={photo.src} alt={photo.title} />
            <span>{photo.acessos}</span>
        </li>
    );
};

export default FeedPhotosItem;
