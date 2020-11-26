import React from "react";
import { COMMENT_POST } from "../../../api";
import { ReactComponent as Enviar } from "../../../Assets/enviar.svg";
import useFetch from "../../../Hooks/useFetch.js";
import Erro from "../../Feedback/Erro.js";

const PhotoCommentsForm = ({ id, setComments }) => {
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
        <form onSubmit={handleSubmit}>
            <textarea
                id="comment"
                name="comment"
                placeholder="Coment..."
                value={comment}
                onChange={({ target }) => setComment(target.value)}
            />

            <button><Enviar /></button>
            {erro && <Erro erro={erro} />}
        </form>
    );
};

export default PhotoCommentsForm;
