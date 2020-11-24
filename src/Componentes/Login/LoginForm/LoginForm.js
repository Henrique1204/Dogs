import React from "react";
import { Link } from "react-router-dom";
import estilos from "./LoginForm.module.css";
import estiloBtn from "../../Forms/Button/Button.module.css";
import useForm from "../../../Hooks/useForm";
import Input from "../../Forms/Input/Input";
import Button from "../../Forms/Button/Button";
import { UserContext } from "../../../UserContext";
import Erro from "../../Feedback/Erro";

const LoginForm = () => {
    const username = useForm();
    const password = useForm();
    const { userLogin, erro, loading } = React.useContext(UserContext);

    async function handleSubmit(event) {
        event.preventDefault();

        if (username.validar() && password.validar()) {
            userLogin(username.valor, password.valor);
        }
    }

    return (
        <section className="animarEsquerda">
            <h1 className="titulo">Login</h1>

            <form className={estilos.form} onSubmit={handleSubmit}>
                <Input label="Usuário:" type="text" name="username" {...username} />
                <Input label="Senha:" type="password" name="password" {...password} />

                {
                    (loading) ? (
                        <Button disabled >Carregando...</Button>
                    ) : (
                        <Button>Entrar</Button>
                    )
                }

                <Erro erro={erro} estilo={{fontSize: "1rem"}} />
            </form>

            <Link to="login/perdeu" className={estilos.perdeu} >Perdeu a senha?</Link>

            <div className={estilos.cadastro}>
                <h2 className={estilos.subtitulo}>Cadastra-se</h2>
                <p>Ainda não possui conta? Cadastre-se no site.</p>

                <Link to="/login/criar" className={estiloBtn.button}>Cadastro</Link>
            </div>
        </section>
    );
};

export default LoginForm;
