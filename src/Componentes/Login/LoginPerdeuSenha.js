import React from "react";
import Input from "../Forms/Input/Input.js";
import Button from "../Forms/Button/Button.js";
import useForm from "../../Hooks/useForm.js";
import useFetch from "../../Hooks/useFetch.js";
import { PASSWORD_LOST } from "../../api.js";
import Erro from "../Feedback/Erro.js";
import Head from "../Head.js";

const LoginPerdeuSenha = () => {
    const login = useForm();
    const { dados, erro, loading, request } = useFetch();

    async function handleSubmit (event) {
        event.preventDefault();

        if (login.validar()) {
            const { url, options } = PASSWORD_LOST({
                login: login.valor,
                url: window.location.href.replace("perdeu", "resetar")
            });
    
            await request(url, options);
        }
    }

    return (
        <section>
            <Head title="Perdeu a senha" />
            <h1 className="titulo">Perdeu a senha</h1>

            {
                (dados) ? (
                    <p style={{ color: "#4C1" }} >{dados}</p>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <Input label="E-mail / Usuário" type="text" name="email" {...login} />
    
                        {
                            (loading) ? (
                                <Button disabled>Carregando...</Button>
                            ) : (
                                <Button>Enviar e-mail</Button>
                            )
                        }
        
                        <Erro erro={erro} />
                    </form>
                )
            }
        </section>
    );
};

export default LoginPerdeuSenha;
