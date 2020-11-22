import React from "react";
import { Link } from "react-router-dom";
import useForm from "../../Hooks/useForm";
import Input from "../Forms/Input/Input";
import Button from "../Forms/Button/Button";

const LoginForm = () => {
    const username = useForm();
    const password = useForm("senha");

    function handleSubmit(event) {
        event.preventDefault();

        if (username.validar() && password.validar()) {
            fetch('http://dogsapi.teste/json/jwt-auth/v1/token', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: username.valor,
                    password: password.valor
                })
            }).then((res) => {
                console.log(res);
                return res.json();
            }).then((json) => {
                console.log(json);
            }).catch((erro) => {
                console.log(erro)
            });
        }
    }

    return (
        <section>
            <h1>Login</h1>

            <form onSubmit={handleSubmit}>
                <Input label="Usuário:" type="text" name="username" {...username} />
                <Input label="Senha:" type="password" name="password" {...password} />

                <Button>Entrar</Button>
            </form>

            <Link to="/login/criar">Cadastro</Link>
        </section>
    );
};

export default LoginForm;
