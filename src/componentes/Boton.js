import React from "react";
import '../stylesheet/Boton.css'

function Boton({text, clase, onClick}){
    return(
        <button className={clase} onClick={onClick}>{text}</button>
    )
}

export default Boton;