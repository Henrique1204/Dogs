import React from "react";
import { COMMENT_POST } from "../../../api";
import { ReactComponent as Enviar } from "../../../Assets/enviar.svg";
import useFetch from "../../../Hooks/useFetch.js";
import Erro from "../../Feedback/Erro.js";
import estilos from "./PhotoCommentsForm.module.css";

const PhotoCommentsForm = ({ id, setComments, single }) => {
    const { request, erro } = useFetch();
    const [comment, setComment] = React.useState("");

    async function handleSubmit (event) {
        event.preventDefault();

        const { url, options } = COMMENT_POST(id, {comment});
        const { response, json } = await request(url, options);

        if (response.ok === true) {
            setComment("");
            setComments((comments) => [...comments, json]);
        }
    }

    return (
        <form className={`${estilos.form} ${(single) ? estilos.single : ""}`} onSubmit={handleSubmit}>
            <textarea
                className={estilos.textarea}
                id="comment"
                name="comment"
                placeholder="Comente..."
                value={comment}
                onChange={({ target }) => setComment(target.value)}
            />

            <button className={estilos.button} ><Enviar /></button>
            {erro && <Erro erro={erro} />}
        </form>
    );
};

export default PhotoCommentsForm;
