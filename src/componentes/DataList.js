import React from "react";
import '../stylesheet/DataList.css'

function DataList({nombre}) {
    return (
        <>
            <div className="inputWrapper">
                <input type="list" list={nombre} className="dataList" placeholder={nombre}></input>
            </div>
            
            <datalist id={nombre}>
                {/*Funcion que trae los elementos de la base de datos y muestra las opciones*/}
                <option value="Opcion1"></option>
                <option value="Opcion2"></option>
            </datalist>
        </>
    )
}
    
export default DataList;