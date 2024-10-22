// Home.js
import React from 'react';
import { Link } from 'react-router-dom';

import Cards from "../componentes/Cards";
import { MagnifyingGlassIcon, PlusCircledIcon, CalendarIcon, BarChartIcon } from "@radix-ui/react-icons"

function Home() {
    return (
        <section className='contHome'>
            <div className="descriptionHome">
              <div className="titleHome">Schedule</div>

              <div className="textHome">"¡Hola! Estás a un paso de eliminar el caos en la programación de horarios y asignación de aulas. ¡Empecemos a mejorar tu día a día en el Sena!"</div>
              </div>

            <div className="cards">

                <Link to='/Horarios' className="Link">
                  <Cards 
                      iconCard={CalendarIcon}
                      iconClass={"cardIcon"}
                      titulo={"Programación de Horarios"}
                      text={"En esta página podrás programar o editar los horarios para las fichas y los instructores, asignando sus debidas competencias, resultados de aprendizaje, etc."}
                  />
                </Link>
                  

                <Link to='/Buscar' className="Link">
                  <Cards 
                        iconCard={MagnifyingGlassIcon}
                        iconClass={"cardIcon"}
                        titulo={"Consultar Horarios"}
                        text={"Podrás visualizar y descargar los horarios ya programados."}
                    />
                </Link>

                <Link to='/Agregar' className="Link">
                  <Cards 
                      iconCard={PlusCircledIcon}
                      iconClass={"cardIcon"}
                      titulo={"Agregar o Editar"}
                      text={"Podrás agregar y editar las fichas y los instructores fácilmente."}
                  />
                </Link>

                <Link to='/Informes' className="Link">
                  <Cards 
                      iconCard={BarChartIcon}
                      iconClass={"cardIcon"}
                      titulo={"Informes"}
                      text={"Podrás visualizar un informe detallado de las horas programadas, las competencias, y más información relevante de las fichas y los profesores."}
                  />
                </Link>

            </div>
        </section>
    )
}

export default Home;
