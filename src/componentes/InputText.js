import React from "react";

function InputText({nombre, tipo, clase, texto}) {
    return (
        <>
            <input type={tipo} className={clase} id={nombre} placeholder={texto}/>
        </>
    )
}
    
export default InputText;