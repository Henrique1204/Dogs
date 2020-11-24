import React from "react";

const Erro = ({erro, estilo}) => {

    if(!erro) return null;

    return <small style={{color: "#F31", margin: "1rem 0", display: "block", ...estilo}}>{erro}</small>;
};

export default Erro;
