import React from "react";
import estilos from "./Input.module.css";

const Input = ({label, type, name}) => {
    return (
        <div className={estilos.wrapper}>
            <label htmlFor={name} className={estilos.label}>{label}</label>
            <input id={name} name={name} className={estilos.input} type={type} />
            <small className={estilos.erro}>Erro</small>
        </div>
    );
};

export default Input;
