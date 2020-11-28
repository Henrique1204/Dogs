import React from "react";
import FeedPhotosItem from "../FeedPhotosItem/FeedPhotosItem.js";
import Erro from "../../Feedback/Erro.js";
import estilos from "./FeedPhotos.module.css";
import Loading from "../../Feedback/Loading.js";
import useFetch from "../../../Hooks/useFetch.js";
import { PHOTOS_GET } from "../../../api.js";

const FeedPhotos = ({ user, page, setModalPhoto, setInfinito }) => {
    const { dados, loading, erro, request } = useFetch();

    React.useEffect(() => {
        async function fetchPhotos() {
            const total = 3;

            const { url, options } = PHOTOS_GET({
                page,
                total,
                user
            });

            const { response, json } = await request(url, options);

            if (response && response.ok && json.length < total) {
                setInfinito(false);
            }
        }

        fetchPhotos();
    }, [request, page, user]);

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
