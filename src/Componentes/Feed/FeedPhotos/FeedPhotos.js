import React from "react";
import FeedPhotosItem from "../FeedPhotosItem/FeedPhotosItem.js";
import estilos from "./FeedPhotos.module.css";
import { useSelector } from "react-redux";

const FeedPhotos = ({ setModalPhoto }) => {
    const { lista } = useSelector((state) => state.feed);

    return (
        <ul className={`animarEsquerda ${estilos.feed}`}>
            {
                lista.map((photo) => (
                    <FeedPhotosItem
                        key={photo.id}
                        photo={photo}
                        setModalPhoto={setModalPhoto}
                    />
                ))
            }
        </ul>
    )
};

export default FeedPhotos;
