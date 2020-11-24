import React from "react";
import Erro from "../../Feedback/Erro";
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

            <Erro erro={erro} estilo={{margin: "0.25rem 0 0", fontSize: "0.875rem"}} />
        </div>
    );
};

export default Input;
