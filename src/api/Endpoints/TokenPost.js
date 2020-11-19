import React from "react";

const TokenPost = () => {
    const [username, setUsername] = React.useState("");
    const [senha, setSenha] = React.useState("");
    const [token, setToken] = React.useState(null);

    function handleSubmit(event) {
        event.preventDefault();

        fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username, password: senha})
        }).then((res) => res.json())
        .then((json) => setToken(json.token))
        .catch((e) => console.log(e));
    }

    return (
        <>
            {token && <p style={{wordBreak: "break-all"}}>{token}</p>}
            <form onSubmit={handleSubmit}>
                <input type="text" value={username} onChange={({target}) =>  setUsername(target.value)} placeholder="Usuário"/>
                <input type="text" value={senha} onChange={({target}) =>  setSenha(target.value)} placeholder="Senha"/>

                <button>Enviar</button>
            </form>
        </>
    );
};

export default TokenPost;
