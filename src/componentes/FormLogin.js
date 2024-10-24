import React from "react";
import Select from "./Select";
import InputText from "./InputText";
import Boton from "./Boton";

function FormLogin({nombre}) {
    return (
        <>
            <h1 className="textFormLogin">Schedule</h1>
            <div>
                <Select nombre="Tipo Documento" clase="inputTextLogin"/>
                <InputText tipo="text" nombre="Documento" clase="inputTextLogin" texto="Numero de Documento"/>
                <InputText tipo="password" nombre="Contraseña" clase="inputTextLogin" texto="Contraseña"/>
            </div>
            <Boton clase="botonLogin" text="INGRESAR"/>
        </>
    )
}
    
export default FormLogin;