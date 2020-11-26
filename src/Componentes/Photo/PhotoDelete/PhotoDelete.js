import React from "react";
import { PHOTO_DELETE } from "../../../api";
import estilos from "./PhotoDelete.module.css";
import useFetch from "../../../Hooks/useFetch.js";

const PhotoDelete = ({ id }) => {
    const { loading, request } = useFetch();

    async function handleClick () {
        const confirm = window.confirm("Tem certeza que quer deletar?");

        if (confirm) {
            const { url, options } = PHOTO_DELETE(id);
            const { response } = await request(url, options);
    
            if (response.ok) window.location.reload();
        }
    }

    return (
        <>
            {
                (loading) ? (
                    <button className={estilos.delete} onClick={handleClick} disabled >Deletar</button>
                ) : (
                    <button className={estilos.delete} onClick={handleClick} >Deletar</button>
                )
            }
        </>
    );
};

export default PhotoDelete;
