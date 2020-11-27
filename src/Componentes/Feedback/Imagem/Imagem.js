import React from "react";
import estilos from "./Imagem.module.css";

const Imagem = ({ alt, ...props }) => {
    const [skeleton, setSkeleton] = React.useState(true);

    function handleLoading({ target }) {
        setSkeleton(false);
        target.style.opacity = 1;
    }

    return (
        <div className={estilos.wrapper}>
            {skeleton && <div className={estilos.skeleton} ></div>}
            <img onLoad={handleLoading} className={estilos.img} alt={alt}  {...props} />
        </div>
    );
};

export default Imagem;
