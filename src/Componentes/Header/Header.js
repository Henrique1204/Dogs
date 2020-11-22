import React from "react";
import { Link } from "react-router-dom";
import estilos from "./Header.module.css";
import {ReactComponent as Dogs} from "../../Assets/dogs.svg";

const Header = () => {
    return (
        <header className={estilos.header}>
            <nav className={`container ${estilos.nav}`}>
                <Link to="/" className={estilos.logo} aria-label="Dogs - Home" >
                    <Dogs />
                </Link>
                <Link to="/login" className={estilos.login} >Login / Criar</Link>
            </nav>
        </header>
    );
};

export default React.memo(Header);
