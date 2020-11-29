import React from "react";
import estilos from "./GraficosUsuario.module.css";
import { VictoryPie, VictoryChart, VictoryBar } from "victory";

const GraficosUsuario = ({ dados }) => {
    const [grafico, setGrafico] = React.useState([]);
    const [total, setTotal] = React.useState(0);

    React.useEffect(() => {
        const graficoDados = dados.map((item) => {
            return {
                x: item.title,
                y: Number(item.acessos)
            }
        })

        setGrafico(graficoDados);

        setTotal(
            dados.map((dado) => Number(dado.acessos)).reduce((ant, atual) => (ant + atual), 0)
        );

    }, [dados]);

    return (
        <section className={`animerEsquerda ${estilos.grafico}`}>
            <div className={`${estilos.total} ${estilos.graficoItem}`}>
                <p>Acessos: {total}</p>
            </div>

            <div className={estilos.graficoItem}>
                <VictoryPie
                    data={grafico}
                    innerRadius={50}
                    padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
                    style={{
                        data: {
                            fillOpacity: 0.9,
                            stroke: "#FFF",
                            strokeWidth: 2,
                        },
                        labels: {
                            fontSize: 14,
                            fill: "#333"
                        }
                    }}
                />
            </div>

            <div className={estilos.graficoItem}>
                <VictoryChart>
                    <VictoryBar alignment="start" data={grafico} />
                </VictoryChart>
            </div>
        </section>
    );
};

export default GraficosUsuario;
;