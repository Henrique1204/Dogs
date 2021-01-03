import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginForm from "./LoginForm/LoginForm.js";
import LoginCriar from "./LoginCriar.js";
import LoginPerdeuSenha from "./LoginPerdeuSenha.js";
import LoginResetarSenha from "./LoginResetarSenha.js";
import estilos from "./Login.module.css";
import RotaDesconhecida from "../RotaDesconhecida.js";
import { useSelector } from "react-redux";

const Login = () => {
    const { dados } = useSelector((state) => state.user);

    if (dados) return <Navigate to="/conta" />

    return (
        <section className={estilos.login}>
            <div className={estilos.forms}>
                <Routes>
                    <Route path="/" element={<LoginForm />} />
                    <Route path="/criar" element={<LoginCriar />} />
                    <Route path="/perdeu" element={<LoginPerdeuSenha />} />
                    <Route path="/resetar" element={<LoginResetarSenha />} />
                    <Route path="*" element={<RotaDesconhecida />} ></Route>
                </Routes>
            </div>
        </section>
    );
};

export default Login;
