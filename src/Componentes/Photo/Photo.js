import React from "react";
import { useParams } from "react-router-dom";
import { PHOTO_GET } from "../../api";
import useFetch from "../../Hooks/useFetch";
import Erro from "../Feedback/Erro";
import Loading from "../Feedback/Loading";
import PhotoContent from "./PhotoContent/PhotoContent";

const Photo = () => {
    const { id } = useParams();
    const { dados, erro, loading, request } = useFetch();

    React.useEffect(() => {
        const { url, options } = PHOTO_GET(id);

        request(url, options);
    }, [id, request]);

    if (erro) return <Erro erro={erro} />;
    if (loading) return <Loading />;

    if (dados) {
        return (
            <section className="container mainContainer">
                <PhotoContent dados={dados} single={true} />
            </section>
        )
    } else {
        return null;
    }
};

export default Photo;
