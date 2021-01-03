import React from "react";
import FeedModal from "./FeedModal/FeedModal.js";
import FeedPhotos from "./FeedPhotos/FeedPhotos.js";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { loadNewPhotos, resetFeedState } from "../../store/feed.js";
import Loading from "../Feedback/Loading.js";
import Erro from "../Feedback/Erro.js";

const Feed = ({ user }) => {
    // Estados globais.
    const { loading, erro, lista , infinite} = useSelector((state) => state.feed);
    const dispatch = useDispatch();

    const [modalPhoto, setModalPhoto] = React.useState(null);

    React.useEffect(() => {
        dispatch(resetFeedState());
        dispatch(loadNewPhotos({ user, total: 6 }));
    }, [dispatch, user]);

    React.useEffect(() => {
        let wait = false;

        function scrollInfinito() {
            if (infinite) {
                const scroll = window.scrollY;
                const altura = document.body.offsetHeight - window.innerHeight;
    
                if (scroll > (altura * 0.75) && !wait) {
                    dispatch(loadNewPhotos({ user, total: 6 }));
                    wait = true;
    
                    setTimeout(() => {
                        wait = false;
                    }, 500);
                }
            }
        }

        window.addEventListener("wheel", scrollInfinito);
        window.addEventListener("scroll", scrollInfinito);

        return () => {
            window.removeEventListener("wheel", scrollInfinito);
            window.removeEventListener("scroll", scrollInfinito);
        }
    }, [infinite, dispatch, user]);

    return (
        <>
            { modalPhoto && <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} /> }
            { lista.length > 0 && <FeedPhotos setModalPhoto={setModalPhoto} /> }
            { loading && <Loading /> }
            { erro && <Erro erro={erro} /> }
        </>
    );
};

Feed.defaultProps = {
    user: 0
}

Feed.propTypes = {
    user: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired])
}

export default Feed;
