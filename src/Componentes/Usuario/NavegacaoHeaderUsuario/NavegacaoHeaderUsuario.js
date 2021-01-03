import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ReactComponent as MinhasFotos } from "../../../Assets/feed.svg";
import { ReactComponent as Estatisticas } from "../../../Assets/estatisticas.svg";
import { ReactComponent as AdicionarFotos } from "../../../Assets/adicionar.svg";
import { ReactComponent as Sair } from "../../../Assets/sair.svg";
import estilos from "./NavegacaoHeaderUsuario.module.css";
import useMedia from "../../../Hooks/useMedia";
import { useDispatch } from "react-redux";
import { userLogout } from "../../../store/user";

const NavegacaoHeaderUsuario = () => {
    const dispatch = useDispatch();

    const mobile = useMedia('(max-width: 40rem)');
    const [mobileMenu, setMobileMenu] = React.useState(false);

    const { pathname } = useLocation();

    React.useEffect(() => {
        setMobileMenu(false);
    }, [pathname]);

    return (
        <>
            {
                mobile && (
                    <button
                        aria-label="Menu"
                        onClick={() => setMobileMenu(!mobileMenu)}
                        className={`${estilos.mobileButton} ${mobileMenu && estilos.mobileButtonAtivo}`}
                    ></button>
                )
            }

            <nav className={`${(mobile) ? estilos.navMobile : estilos.nav} ${mobileMenu && estilos.navMobileAtivo}`}>
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

                <button onClick={() => dispatch(userLogout())}>
                    <Sair />
                    {mobile && "Sair"}
                </button>
            </nav>
        </>
    );
};

export default NavegacaoHeaderUsuario;
