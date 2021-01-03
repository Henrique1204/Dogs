import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPhoto } from "../../store/photo.js";
import Erro from "../Feedback/Erro";
import Loading from "../Feedback/Loading";
import Head from "../Head";
import PhotoContent from "./PhotoContent/PhotoContent";

const Photo = () => {
    const { id } = useParams();
    const { dados, erro, loading } = useSelector((state) => state.photo);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchPhoto(id));
    }, [id, dispatch]);

    if (erro) return <Erro erro={erro} />;
    if (loading) return <Loading />;

    if (dados) {
        return (
            <section className="container mainContainer">
                <Head title={dados.photo.title} />
                <PhotoContent single={true} />
            </section>
        );
    } else {
        return null;
    }
};

export default Photo;
