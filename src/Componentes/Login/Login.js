import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginForm from "./LoginForm/LoginForm.js";
import LoginCriar from "./LoginCriar/LoginCriar.js";
import LoginPerdeuSenha from "./LoginPerdeuSenha.js";
import LoginResetarSenha from "./LoginResetarSenha.js";
import { UserContext } from "../../UserContext";
import estilos from "./Login.module.css";

const Login = () => {
    const { login } = React.useContext(UserContext);

    if (login === true) return <Navigate to="/conta" />

    return (
        <section className={estilos.login}>
            <div className={estilos.forms}>
                <Routes>
                    <Route path="/" element={<LoginForm />} />
                    <Route path="/criar" element={<LoginCriar />} />
                    <Route path="/perdeu" element={<LoginPerdeuSenha />} />
                    <Route path="/resetar" element={<LoginResetarSenha />} />
                </Routes>
            </div>
        </section>
    );
};

export default Login;
