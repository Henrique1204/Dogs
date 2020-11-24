import React from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../../UserContext";
import { ReactComponent as MinhasFotos } from "../../../Assets/feed.svg";
import { ReactComponent as Estatisticas } from "../../../Assets/estatisticas.svg";
import { ReactComponent as AdicionarFotos } from "../../../Assets/adicionar.svg";
import { ReactComponent as Sair } from "../../../Assets/sair.svg";
import estilos from "./NavegacaoHeaderUsuario.module.css";

const NavegacaoHeaderUsuario = () => {
    const [mobile, setMobile] = React.useState(null);
    const { userLogout } = React.useContext(UserContext);

    return (
        <nav className={estilos.nav}>
            <NavLink to="/conta" end activeClassName={estilos.ativo} >
                <MinhasFotos />
                {mobile && "Minhas Fotos"}
            </NavLink>
            <NavLink to="/conta/estatisticas" activeClassName={estilos.ativo} >
                <Estatisticas />
                {mobile && "Estátisticas"}
            </NavLink>
            <NavLink to="/conta/postar" activeClassName={estilos.ativo} >
                <AdicionarFotos />
                {mobile && "Adicionar Fotos"}
            </NavLink>

            <button onClick={userLogout}>
                <Sair />
                {mobile && Sair}
            </button>
        </nav>
    );
};

export default NavegacaoHeaderUsuario;
