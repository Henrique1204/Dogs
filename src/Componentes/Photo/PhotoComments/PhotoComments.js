import React from "react";
import { useSelector } from "react-redux";
import PhotoCommentsForm from "../PhotoCommentsForm/PhotoCommentsForm.js";
import estilos from "./PhotoComments.module.css";

const PhotoComments = (props) => {
    // Estados globais.
    const { dados } = useSelector((state) => state.user);

    // Estados locais.
    const [comments, setComments] = React.useState(() => props.comments);
    const commentsSection = React.useRef(null);

    React.useEffect(() => {
        commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
    }, [comments]);

    return (
        <>
            <ul ref={commentsSection} className={`${estilos.comments} ${props.single ? estilos.single : ""}`}>
                {
                    comments.map((comment) => (
                        <li key={comment.comment_ID} >
                            <strong>{comment.comment_author}: </strong>
                            <span>{comment.comment_content}</span>
                        </li>
                    ))
                }
            </ul>

            {dados && <PhotoCommentsForm id={props.id} setComments={setComments} single={props.single} />}
        </>
    );
};

export default PhotoComments;
