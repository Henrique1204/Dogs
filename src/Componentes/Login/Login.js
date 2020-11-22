import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./LoginForm";
import LoginCriar from "./LoginCriar";
import LoginPerdeuSenha from "./LoginPerdeuSenha.js";
import LoginResetarSenha from "./LoginResetarSenha.js";

const Login = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route path="/criar" element={<LoginCriar />} />
                <Route path="/perdeu" element={<LoginPerdeuSenha />} />
                <Route path="/resetar" element={<LoginResetarSenha />} />
            </Routes>
        </div>
    );
};

export default Login;
