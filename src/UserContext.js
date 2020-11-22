import React from "react";
import { TOKEN_POST, USER_GET } from "./api";

export const UserContext = React.createContext();

export const UserStorage = ({children}) => {
    const [dados, setDados] = React.useState(null);
    const [login, setLogin] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [erro, setErro] = React.useState(null);

    async function getUser(token) {
        const { url, options } = USER_GET(token);

        const res = await fetch(url, options);
        const json = await res.json();

        setDados(json);
        setLogin(true);
    }

    async function userLogin(username, password) {
        const { url, options } = TOKEN_POST({username, password});

        const res = await fetch(url, options);
        const { token } = await res.json();

        window.localStorage.setItem("token", token);
        getUser(token);
    }

    return (
        <UserContext.Provider value={{ userLogin, dados }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserStorage;
