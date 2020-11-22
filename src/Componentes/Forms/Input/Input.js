import React from "react";
import estilos from "./Input.module.css";

const Input = ({label, type, name, valor, onChange, erro, onBlur}) => {
    return (
        <div className={estilos.wrapper}>
            <label htmlFor={name} className={estilos.label} >{label}</label>

            <input
                id={name}
                name={name}
                className={estilos.input}
                type={type}
                value={valor}
                onChange={onChange}
                onBlur={onBlur}
            />

            {erro && <small className={estilos.erro}>{erro}</small>}
        </div>
    );
};

export default Input;
