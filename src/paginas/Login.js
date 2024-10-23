import React from "react";
import FormLogin from "../componentes/FormLogin";

function Login(){
    return(
        <div className="login">
            <section className="contLogSena">
                <div className="logoSena"></div>

                <div className="textLogoSena">
                    SERVICIO NACIONAL DE APRENDIZAJE
                </div>

            </section>

            <section className="contFormLogin">
                <div className="formLogin">
                    <FormLogin />
                </div>
            </section>
        </div>
    );
}

export default Login;