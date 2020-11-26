import React from "react";
import { PHOTO_GET } from "../../../api";
import useFetch from "../../../Hooks/useFetch";
import Erro from "../../Feedback/Erro";
import Loading from "../../Feedback/Loading";
import estilos from "./FeedModal.module.css";
import PhotoContent from "../../Photo/PhotoContent/PhotoContent.js";

const FeedModal = ({ photo, setModalPhoto }) => {
    const { dados, erro, loading, request } = useFetch();

    function handleOutSideClick ({ target, currentTarget }) {
        if (target === currentTarget) setModalPhoto(null);
    }

    React.useEffect(() => {
        console.log(photo.id);
        const { url, options } = PHOTO_GET(photo.id);

        request(url, options);

    }, [photo, request]);

    return (
        <div className={estilos.modal} onClick={handleOutSideClick}>
            { erro === null && <Erro erro={erro} /> }
            { loading && <Loading /> }
            { dados && <PhotoContent dados={dados} /> }
        </div>
    );
};

export default FeedModal;
