import React from "react";
import Input from "../../Forms/Input/Input.js";
import Button from "../../Forms/Button/Button.js";
import useForm from "../../../Hooks/useForm.js";
import { USER_POST } from "../../../api.js";
import { UserContext } from "../../../UserContext.js";

const LoginCriar = () => {
    const username = useForm();
    const email = useForm("email");
    const password = useForm("senha");
    const { userLogin } = React.useContext(UserContext)

    async function handleSubmit(event) {
        event.preventDefault();

        const { url, options } = USER_POST({
            username: username.valor,
            email: email.valor,
            password: password.valor,
        });

        const res = await fetch(url, options);

        if (res.ok) userLogin(username.valor, password.valor);
    }

    return (
        <section className="animarEsquerda">
            <h1 className="titulo">Cadastre-se</h1>

            <form onSubmit={handleSubmit}>
                <Input label="Usuário:" type="text" name="username" {...username} />
                <Input label="E-mail:" type="email" name="email" {...email} />
                <Input label="Senha:" type="password" name="senha" {...password} />

                <Button>Cadastrar</Button>
            </form>
        </section>
    );
};

export default LoginCriar;
