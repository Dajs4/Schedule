import React from "react";
import FormLogin from "../componentes/FormLogin";
import '../stylesheet/App2.css'

function Login(){
    return(
        <div className="login">

            <section className="contFormLogin">
                <div className="formLogin">
                    <FormLogin />
                </div>
            </section>
        </div>
    );
}

export default Login;