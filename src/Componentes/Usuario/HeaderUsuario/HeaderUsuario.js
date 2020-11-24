import React from "react";
import { useLocation } from "react-router-dom";
import NavegacaoHeaderUsuario from "../NavegacaoHeaderUsuario/NavegacaoHeaderUsuario";
import estilos from "./HeaderUsuario.module.css";

const HeaderUsuario = () => {
    const [titulo, setTitulo] = React.useState("");
    const localizacao = useLocation();

    React.useEffect(() => {
        const { pathname } = localizacao;

        switch(pathname) {
            case "/conta/estatisticas":
                setTitulo("Estátisticas");
                break;
            case "/conta/postar":
                setTitulo("Postar Foto");
                break;
            default:
                setTitulo("Minha Conta");
                break;
        }
    }, [localizacao]);

    return (
        <header className={estilos.header} >
            <h1 className="titulo" >{titulo}</h1>
            <NavegacaoHeaderUsuario />
        </header>
    );
};

export default HeaderUsuario;
