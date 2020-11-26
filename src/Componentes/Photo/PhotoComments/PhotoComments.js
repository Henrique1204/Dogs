import React from "react";
import { UserContext } from "../../../UserContext.js";
import PhotoCommentsForm from "../PhotoCommentsForm/PhotoCommentsForm.js";
import estilos from "./PhotoComments.module.css";

const PhotoComments = (props) => {
    const { login } = React.useContext(UserContext);
    const [comments, setComments] = React.useState(() => props.comments);

    return (
        <>
            <ul className={estilos.comment}>
                {
                    comments.map((comment) => (
                        <li key={comment.comment_ID} >
                            <strong>{comment.comment_author}: <span>{comment.comment_content}</span></strong>
                        </li>
                    ))
                }
            </ul>
            {login && <PhotoCommentsForm id={props.id} setComments={setComments} />}
        </>
    );
};

export default PhotoComments;
