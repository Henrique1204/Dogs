import React from "react";
import Input from "../Forms/Input/Input.js";
import Button from "../Forms/Button/Button.js";
import useForm from "../../Hooks/useForm.js";
import useFetch from "../../Hooks/useFetch.js";
import { PASSWORD_RESET } from "../../api.js";
import Erro from "../Feedback/Erro.js";
import { useNavigate } from "react-router-dom";
import Head from "../Head.js";

const LoginResetarSenha = () => {
    const [login, setLogin] = React.useState("");
    const [key, setKey] = React.useState("");
    const password = useForm();
    const { loading, erro, request } = useFetch();
    const navegar = useNavigate();

    async function handleSubmit (event) {
        event.preventDefault();

        if (password.validar()) {
            const { url, options } = PASSWORD_RESET({
                login,
                key,
                password: password.valor
            });
    
            const { response } = await request(url, options);
    
            if (response.ok) navegar("/login");
        }
    }

    React.useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const key = params.get("key");
        const login = params.get("login");


        if (key) setKey(key);
        if (login) setLogin(login);

    }, []);

    return (
        <section className="animarEsquerda">
            <Head title="Resetar senha" />
            <h1 className="titulo">Resete a senha</h1>

            <form onSubmit={handleSubmit}>
                <Input label="Nova Senha" type="password" name="password" {...password} />

                {
                    (loading) ? (
                        <Button disabled>Carregando...</Button>
                    ) : (
                        <Button>Resetar</Button>
                    )
                }

                <Erro erro={erro} />
            </form>
        </section>
    );
};

export default LoginResetarSenha;
