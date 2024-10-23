import React from "react";
import DataList from "./DataList";
import InputText from "./InputText";

function FormLogin({nombre}) {
    return (
        <>
            <h1 className="textFormLogin">Schedule</h1>
            <DataList nombre="Tipo Documento"/>
            <InputText tipo="text" nombre="Documento" clase="inputTextLogin" texto="Numero de Documento"/>
            <InputText tipo="password" nombre="Contraseña" clase="inputTextLogin" texto="Contraseña"/>
        </>
    )
}
    
export default FormLogin;