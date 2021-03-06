import React from "react";
import Input from "../Forms/Input/Input.js";
import Button from "../Forms/Button/Button.js";
import { USER_POST } from "../../api.js";
import useForm from "../../Hooks/useForm.js";
import useFetch from "../../Hooks/useFetch.js";
import Erro from "../Feedback/Erro.js";
import Head from "../Head.js";
import { useDispatch } from "react-redux";
import { userLogin } from "../../store/user.js";

const LoginCriar = () => {
    const dispatch =  useDispatch();

    const username = useForm();
    const email = useForm("email");
    const password = useForm("senha");

    const { loading, erro, request } = useFetch();

    async function handleSubmit(event) {
        event.preventDefault();

        const { url, options } = USER_POST({
            username: username.valor,
            email: email.valor,
            password: password.valor,
        });

        const { response } = await request(url, options);

        if (response.ok) dispatch(userLogin({ username: username.valor, password: password.valor }));
    }

    return (
        <section className="animarEsquerda">
            <Head title="Cadastro" />
            <h1 className="titulo">Cadastre-se</h1>

            <form onSubmit={handleSubmit}>
                <Input label="Usuário:" type="text" name="username" {...username} />
                <Input label="E-mail:" type="email" name="email" {...email} />
                <Input label="Senha:" type="password" name="senha" {...password} />

                {
                    (loading) ? (
                        <Button disabled>Cadastrando...</Button>
                    ) : (
                        <Button>Cadastrar</Button>
                    )
                }

                <Erro erro={erro} />
            </form>
        </section>
    );
};

export default LoginCriar;
