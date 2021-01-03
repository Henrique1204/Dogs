import React from "react";
import { Link } from "react-router-dom";
import estilos from "./Header.module.css";
import {ReactComponent as Dogs} from "../../Assets/dogs.svg";
import { useSelector } from "react-redux";

const Header = () => {
    const { dados } = useSelector((state) => state.user);

    return (
        <header className={estilos.header}>
            <nav className={`container ${estilos.nav}`}>
                <Link to="/" className={estilos.logo} aria-label="Dogs - Home" >
                    <Dogs />
                </Link>

                {
                    (dados) ? (
                        <Link to="/conta" className={estilos.login} >{dados.nome}</Link>
                    ) : (
                        <Link to="/login" className={estilos.login} >Login / Criar</Link>
                    )
                }
            </nav>
        </header>
    );
};

export default Header;
