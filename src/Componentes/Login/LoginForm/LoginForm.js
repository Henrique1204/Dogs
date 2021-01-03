import React from "react";
import { Link } from "react-router-dom";
import estilos from "./LoginForm.module.css";
import estiloBtn from "../../Forms/Button/Button.module.css";
import useForm from "../../../Hooks/useForm";
import Input from "../../Forms/Input/Input";
import Button from "../../Forms/Button/Button";
import Erro from "../../Feedback/Erro";
import Head from "../../Head";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../../store/user.js";

function LoginForm() {
    // Estados globais.
    const { user, token } = useSelector((state) => state);
    const loading = user.loading || token.loading;
    const erro = user.erro || token.erro;
    const dispatch = useDispatch();

    // Estados locais.
    const username = useForm();
    const password = useForm();

    async function handleSubmit(event) {
        event.preventDefault();

        if (username.validar() && password.validar()) {
            dispatch(userLogin({ username: username.valor, password: password.valor }));
        }
    }

    return (
        <section className="animarEsquerda">
            <Head title="Login" />
            <h1 className="titulo">Login</h1>

            <form className={estilos.form} onSubmit={handleSubmit}>
                <Input label="Usuário:" type="text" name="username" {...username} />
                <Input label="Senha:" type="password" name="password" {...password} />

                {(loading) ? (
                    <Button disabled>Carregando...</Button>
                ) : (
                        <Button>Entrar</Button>
                    )}

                <Erro erro={(erro) && "Dados incorretos!"} estilo={{ fontSize: "1rem" }} />
            </form>

            <Link to="/login/perdeu" className={estilos.perdeu}>Perdeu a senha?</Link>

            <div className={estilos.cadastro}>
                <h2 className={estilos.subtitulo}>Cadastra-se</h2>
                <p>Ainda não possui conta? Cadastre-se no site.</p>

                <Link to="/login/criar" className={estiloBtn.button}>Cadastro</Link>
            </div>
        </section>
    );
}

export default LoginForm;
