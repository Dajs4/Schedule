import React from "react";
import '../stylesheet/InputText.css'

function InputText({nombre, tipo, texto}) {
    return (
        <>
            <input type={tipo} className='inputText' id={nombre} placeholder={texto}/>
        </>
    )
}
    
export default InputText;