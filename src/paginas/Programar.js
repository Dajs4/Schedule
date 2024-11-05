import React from 'react';
import NavBar from "../componentes/NavBar";
import Boton from '../componentes/Boton';
import DataList from '../componentes/DataList';
import Horario from "../componentes/Horario";
import '../stylesheet/Programar.css'

function Programar() {

  return (
    <>
      <NavBar />
      <section className='contenido'>
          {/*Contenido del Formulario de programacion de clases*/}
          <section className="contForm">

            {/*Botones*/}
            <div className="botones">
                <Boton text="Programar" clase="boton" />
                <Boton text="Editar" clase="boton" />
            </div>

            {/*Selects*/}
            <div className='formProgramar'>
              <DataList nombre="Ficha" />
              <DataList nombre="Competencia" />
              <DataList nombre="Instructor" />
              <DataList nombre="Dia" />
              <DataList nombre="Sede" />
              <DataList nombre="Bloque" />
              <DataList nombre="Ambiente" />
            </div>

            {/*Boton de Guardar*/}
            <Boton text="Guardar" clase="botonGrande" />
          </section>

          {/*horario y filtros*/}
          <section className='contProgramar'>

            {/*Filtros y Horario de: */}
            <div className='headerContProgramar'>
              <DataList nombre="Horario de:" />
              <h1 className='TitleSchedule'>Instructor / Ficha / Ambiente </h1>
            </div>
            
            <div className='schedule'>
              <Horario titular='ambiente' />
            </div>

          </section>

      </section>
    </>
  )
}
  
export default Programar;