import React, { useState } from "react";
import Boton from "./Boton";
import InputText from "./InputText";
import DataList from "./DataList";
import '../stylesheet/FormAgregar.css'


function FormAgregar() {
  // Usamos el estado para manejar el valor de `titular`
  const [titular, setTitular] = useState("Instructor");

  return (
    <div className="ContFormAgregar">
      <div className="botones">
        <Boton
          text="Instructor"
          clase="boton"
          onClick={() => setTitular("Instructor")} // Actualizamos el estado con `setTitular`
        />
        <Boton
          text="Ficha"
          clase="boton"
          onClick={() => setTitular("Ficha")} // Actualizamos el estado con `setTitular`
        />
      </div>

      {titular === "Ficha" ? (
        <>
          {/* Aquí puedes agregar contenido específico para Ficha */}
          <InputText nombre='Ficha' tipo='text' clase='' texto='Numero de Ficha' />
          <DataList nombre='Coordinacion' />
          <DataList nombre='Programa de Formacion' />
          <DataList nombre='Jornada' />

        </>
      ) : (
        <>
          {/* Aquí puedes agregar contenido específico para Instructor */}
          <InputText nombre='Nombre' tipo='text' clase='' texto='Nombre' />
          <InputText nombre='Apellido' tipo='text' clase='' texto='Apellido' />
          <DataList nombre='Estado' />
          <DataList nombre='Tipo de Contrato' />
          <DataList nombre='Coordinacion' />

          <div className="imgFormAgregar">
            <div className="agregarImagen">
            </div>
          </div>
        </>
      )}
      <Boton text="Guardar" clase="botonGrande" />
    </div>
  );
}

export default FormAgregar;
