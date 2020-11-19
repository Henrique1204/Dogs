import React from "react";

const UserPost = () => {
    const [username, setUsername] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [senha, setSenha] = React.useState("");

    function handleSubmit(event) {
        event.preventDefault();

        fetch('https://dogsapi.origamid.dev/json/api/user', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username, email, password: senha})
        }).then((res) => res.json())
        .then((json) => console.log(json))
        .catch((e) => console.log(e));
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={username} onChange={({target}) =>  setUsername(target.value)} placeholder="Usuário"/>
            <input type="text" value={senha} onChange={({target}) =>  setSenha(target.value)} placeholder="Senha"/>
            <input type="text" value={email} onChange={({target}) =>  setEmail(target.value)} placeholder="E-mail"/>

            <button>Enviar</button>
        </form>
    );
};

export default UserPost;
