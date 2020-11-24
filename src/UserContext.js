import React from "react";
import { useNavigate } from "react-router-dom";
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from "./api";

export const UserContext = React.createContext();

export const UserStorage = ({children}) => {
    const [dados, setDados] = React.useState(null);
    const [login, setLogin] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [erro, setErro] = React.useState(null);
    const navegar = useNavigate();

    async function getUser(token) {
        const { url, options } = USER_GET(token);

        const res = await fetch(url, options);
        const json = await res.json();

        setDados(json);
        setLogin(true);
    }

    async function userLogin(username, password) {
        try {
            setErro(null);
            setLoading(true);

            const { url, options } = TOKEN_POST({username, password});

            const res = await fetch(url, options);

            if (!res.ok) throw new Error("Erro: Usuário inválido!");

            const { token } = await res.json();
    
            window.localStorage.setItem("token", token);
            await getUser(token);
            navegar("/conta");
        } catch(erro) {
            setErro(erro.message);
            setLogin(false);
        } finally {
            setLoading(false);
        }
    }

    const userLogout = React.useCallback(async () => {
        setDados(null);
        setErro(null);
        setLoading(false);
        setLogin(false);

        window.localStorage.removeItem("token");
        navegar("/login");
    }, [navegar]);

    React.useEffect(() => {
        async function autoLogin() {
            const token = window.localStorage.getItem("token");
    
            if (token) {
                try {
                    setErro(null);
                    setLoading(true);
    
                    const { url, options } = TOKEN_VALIDATE_POST(token);

                    const res = await fetch(url, options);

                    // Testando se a resposta do servidor foi diferente de "ok".
                    // Caso seja, lança um erro.
                    if (!res.ok) throw new Error("Token inválido!");

                    await getUser(token);
                } catch(erro) {
                    userLogout();
                } finally {
                    setLoading(false);
                }
            }
        }

        autoLogin();
    }, [userLogout]);

    return (
        <UserContext.Provider value={{ userLogin, dados, userLogout, login, loading, erro }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserStorage;
