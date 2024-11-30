import React, { useState } from "react";
import NavBar from "../componentes/NavBar";
import FormAgregar from "../componentes/FormAgregar";
import TablaInstructores from "../componentes/TablaInstructores";
import TablaFichas from "../componentes/TablaFichas";
import SearcBar from "../componentes/SearchBar";
import "../stylesheet/Agregar.css";
import ListaComponente from "../componentes/TablaInstructor";
import AddInstructorComponent from "../componentes/AddInstructorComponent";

function Agregar() {
  // Estado para controlar la pestaña activa
  const [activeTab, setActiveTab] = useState("instructores");

  return (
    <>
      <NavBar />

      <section className="contenido">
        <section className="contForm">
          <AddInstructorComponent />
        </section>

        <section className="contAgregar">
          <SearcBar />

          {/* Barra de navegación */}
          <div className="tab-bar">
            <button
              className={activeTab === "instructores" ? "active-tab" : ""}
              onClick={() => setActiveTab("instructores")}>
              Instructores
            </button>
            <button
              className={activeTab === "fichas" ? "active-tab" : ""}
              onClick={() => setActiveTab("fichas")}>
              Fichas
            </button>
          </div>

          {/* Renderizado condicional según la pestaña activa */}
          <div className="tab-content">
            {activeTab === "instructores" && <ListaComponente />}
            {activeTab === "fichas" && <TablaFichas />}
          </div>
        </section>
      </section>
    </>
  );
}

export default Agregar;
