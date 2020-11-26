import React from "react";
import FeedPhotosItem from "../FeedPhotosItem/FeedPhotosItem.js";
import Erro from "../../Feedback/Erro.js";
import estilos from "./FeedPhotos.module.css";
import Loading from "../../Feedback/Loading.js";
import useFetch from "../../../Hooks/useFetch.js";
import { PHOTOS_GET } from "../../../api.js";

const FeedPhotos = ({ setModalPhoto }) => {
    const { dados, loading, erro, request } = useFetch();

    React.useEffect(() => {
        async function fetchPhotos() {
            const { url, options } = PHOTOS_GET({
                page: 1,
                total: 6,
                user: 0
            });

            request(url, options);
        }

        fetchPhotos();
    }, [request]);

    if (erro) return <Erro erro={erro} />;
    if (loading) return <Loading />;

    if (dados) {
        return (
            <ul className={`animarEsquerda ${estilos.feed}`}>
                {
                    dados.map((photo) => (
                        <FeedPhotosItem
                            key={photo.id}
                            photo={photo}
                            setModalPhoto={setModalPhoto}
                        /> 
                    ))
                }
            </ul>
        )
    } else {
        return null;
    }
};

export default FeedPhotos;
