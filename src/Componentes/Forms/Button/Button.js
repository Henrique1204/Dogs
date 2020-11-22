import React from "react";
import estilos from "./Button.module.css";

const Button = ({children, ...props}) => {
    return <button className={estilos.button} {...props} >{children}</button>;
};

export default Button;
