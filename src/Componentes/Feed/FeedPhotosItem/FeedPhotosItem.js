import React from "react";
import { useDispatch } from "react-redux";
import { fetchPhoto } from "../../../store/photo";
import { openModal } from "../../../store/ui";
import Imagem from "../../Feedback/Imagem/Imagem";
import estilos from "./FeedPhotosItem.module.css";

const FeedPhotosItem = ({ photo }) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(openModal());
        dispatch(fetchPhoto(photo.id));
    }

    return (
        <li className={estilos.photo} onClick={handleClick} >
            <Imagem src={photo.src} alt={photo.title} />
            <span>{photo.acessos}</span>
        </li>
    );
};

export default FeedPhotosItem;
