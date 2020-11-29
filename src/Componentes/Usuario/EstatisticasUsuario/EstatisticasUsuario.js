import React from "react";
import Head from "../../Head";
import Loading from "../../Feedback/Loading.js";
import GrificosUsuario from "../GraficosUsuario/GraficosUsuario.js";
import Erro from "../../Feedback/Erro.js";
import useFetch from "../../../Hooks/useFetch.js";
import { STATS_GET } from "../../../api";

const EstatisticasUsuario = () => {
    const { dados, erro, loading, request } = useFetch();

    React.useEffect(() => {
        async function getDados() {
            const { url, options } = STATS_GET();

            await request(url, options);
        }

        getDados();
    }, [request]);

    if (loading) return <Loading />;
    if (erro) return <Erro erro={erro} />

    if (dados) {
        return (
            <div>
                <Head title="Estátisticas" />
                <GrificosUsuario dados={dados} />
            </div>
        );
    } else {
        return null
    }
};

export default EstatisticasUsuario;
