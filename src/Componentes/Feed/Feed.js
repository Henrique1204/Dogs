import React from "react";
import FeedModal from "./FeedModal/FeedModal.js";
import FeedPhotos from "./FeedPhotos/FeedPhotos.js";

const Feed = () => {
    const [modalPhoto, setModalPhoto] = React.useState(null);

    return (
        <>
            {modalPhoto && <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />}
            <FeedPhotos setModalPhoto={setModalPhoto} />
        </>
    );
};

export default Feed;
