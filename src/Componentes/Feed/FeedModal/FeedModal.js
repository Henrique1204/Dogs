import React from "react";
import Erro from "../../Feedback/Erro";
import Loading from "../../Feedback/Loading";
import estilos from "./FeedModal.module.css";
import PhotoContent from "../../Photo/PhotoContent/PhotoContent.js";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhoto } from "../../../store/photo";

const FeedModal = ({ photo, setModalPhoto }) => {
    const { dados, erro, loading } = useSelector((state) => state.photo);
    const dispatch = useDispatch();

    function handleOutSideClick ({ target, currentTarget }) {
        if (target === currentTarget) setModalPhoto(null);
    }

    React.useEffect(() => {
        dispatch(fetchPhoto(photo.id));
    }, [photo, dispatch]);

    return (
        <div className={estilos.modal} onClick={handleOutSideClick}>
            { erro === null && <Erro erro={erro} /> }
            { loading && <Loading /> }
            { dados && <PhotoContent /> }
        </div>
    );
};

export default FeedModal;
