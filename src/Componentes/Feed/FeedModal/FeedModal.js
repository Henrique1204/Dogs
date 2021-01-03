import React from "react";
import Erro from "../../Feedback/Erro";
import Loading from "../../Feedback/Loading";
import estilos from "./FeedModal.module.css";
import PhotoContent from "../../Photo/PhotoContent/PhotoContent.js";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../store/ui.js";

const FeedModal = () => {
    const { dados, erro, loading } = useSelector((state) => state.photo);
    const { modal } = useSelector((state) => state.ui);
    const dispatch = useDispatch();

    function handleOutSideClick ({ target, currentTarget }) {
        if (target === currentTarget) dispatch(closeModal());
    }

    React.useEffect(() => {
        dispatch(closeModal());
    }, [dispatch]);

    if (!modal) return null;

    return (
        <div className={estilos.modal} onClick={handleOutSideClick}>
            { erro === null && <Erro erro={erro} /> }
            { loading && <Loading /> }
            { dados && <PhotoContent /> }
        </div>
    );
};

export default FeedModal;
