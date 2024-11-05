import React from "react";
import '../stylesheet/Boton.css'

function Boton({text, clase}){
    return(
        <button className={clase}>{text}</button>
    )
}

export default Boton;