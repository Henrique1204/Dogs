import React from "react";
import FeedModal from "./FeedModal/FeedModal.js";
import FeedPhotos from "./FeedPhotos/FeedPhotos.js";

const Feed = ({ user }) => {
    const [modalPhoto, setModalPhoto] = React.useState(null);
    const [paginas, setPaginas] = React.useState([1]);
    const [infinito, setInfinito] = React.useState(true);

    React.useEffect(() => {
        let wait = false;

        function scrollInfinito() {
            if (infinito) {
                const scroll = window.scrollY;
                const altura = document.body.offsetHeight - window.innerHeight;
    
                if (scroll > (altura * 0.75) && !wait) {
                    setPaginas((pag) => [...pag, pag.length + 1]);
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
    }, [infinito]);

    return (
        <>
            { modalPhoto && <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} /> }

            {
                paginas.map((pag) => (
                    <FeedPhotos user={user} page={pag} setModalPhoto={setModalPhoto} setInfinito={setInfinito} />
                ))
            }
        </>
    );
};

export default Feed;
