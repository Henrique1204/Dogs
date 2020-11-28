import React from "react";
import estilos from "./Footer.module.css";
import { ReactComponent as Dogs } from "../../Assets/dogs-footer.svg";

const Footer = () => {
    return (
        <footer className={estilos.footer}>
            <Dogs />
            <p>Dogs. Alguns direitos reservados.</p>
        </footer>
    );
};

export default React.memo(Footer);
