import React from "react";
import { UserContext } from "../../../UserContext.js";
import PhotoCommentsForm from "../PhotoCommentsForm/PhotoCommentsForm.js";
import estilos from "./PhotoComments.module.css";

const PhotoComments = (props) => {
    const { login } = React.useContext(UserContext);
    const [comments, setComments] = React.useState(() => props.comments);
    const commentsSection = React.useRef(null);

    React.useEffect(() => {
        commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
    }, [comments]);

    return (
        <>
            <ul ref={commentsSection} className={estilos.comments}>
                {
                    comments.map((comment) => (
                        <li key={comment.comment_ID} >
                            <strong>{comment.comment_author}: </strong>
                            <span>{comment.comment_content}</span>
                        </li>
                    ))
                }
            </ul>

            {login && <PhotoCommentsForm id={props.id} setComments={setComments} />}
        </>
    );
};

export default PhotoComments;
