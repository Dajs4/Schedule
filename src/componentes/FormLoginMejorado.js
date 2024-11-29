import React, { useEffect, useRef } from "react";
import InputText from "./InputText";
import Boton from "./Boton";
import { Link } from "react-router-dom";

function FormLogin() {



    const inputRef = useRef(null); // Crea una referencia para el primer input

    useEffect(() => {
        // Enfoca el primer input al cargar el componente
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    return (
        <>
            <div className="contLogoSena">
                <div className="logoSena"></div>
                <h1 className="textFormLogin"> | SCH</h1>
            </div>
            
            <div>
                <InputText
                    tipo="text"
                    nombre="Documento"
                    claseInput="claseInput"
                    claseLabel="claseLabel"
                    texto="Número de Documento"
                    claseFormDiv="claseFormDiv" // Asegúrate de pasar esta prop si la usas
                    ref={inputRef} // Asigna la referencia al primer input
                />
                <InputText
                    tipo="password"
                    nombre="Contraseña"
                    claseInput="claseInput"
                    claseLabel="claseLabel"
                    texto="Contraseña"
                    claseFormDiv="claseFormDiv" // Asegúrate de pasar esta prop si la usas
                />
            </div>
            
            <Link to="/">Olvidé mi contraseña</Link>
            <Boton clase="botonLogin" text="INGRESAR"/>
        </>
    );
}
    
export default FormLogin;

