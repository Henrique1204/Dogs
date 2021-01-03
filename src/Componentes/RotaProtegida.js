import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router-dom";

const RotaProtegida = (props) => {
    const { dados } = useSelector((state) => state.user);

    if (dados) return <Route {...props} />;
    else if (dados === null) return <Navigate to="/login" />;
    else return null;
};

export default RotaProtegida;
