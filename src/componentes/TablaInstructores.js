import React, { useEffect, useState } from "react";

function TablaInstructores() {
  // Estado para guardar los datos de los instructores
  const [instructores, setInstructores] = useState([]);

  // Cargar datos de la base de datos (api falsa, ejecutar antes el comando "npm run exe-api") para montarlo en el componente
  useEffect(() => {
    fetch("http://localhost:5000/instructores") //End point de Instrcutores
      .then((response) => response.json())
      .then((data) => setInstructores(data))
      .catch((error) => console.error("Error al cargar los datos:", error));
  }, []);

  return (
    <div className="tabla-container">
      <table className="tabla-instructores">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Estado</th>
            <th>Tipo de Contrato</th>
            <th>Coordinación</th>
          </tr>
        </thead>
        <tbody>
          {/* Validación para evitar errores si instructores está vacío */}
          {instructores.length > 0 ? (
            instructores.map((instructor) => (
              <tr key={instructor.id}>
                <td>{instructor.nombres}</td>
                <td>{instructor.apellidos}</td>
                <td
                  style={{
                    color: instructor.estado === "Activo" ? "green" : "red",
                    fontWeight: "bold",
                  }}
                >
                  {instructor.estado}
                </td>
                <td>{instructor.tipo_contrato}</td>
                <td>{instructor.coordinacion}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">Cargando datos o no hay instructores disponibles</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TablaInstructores;