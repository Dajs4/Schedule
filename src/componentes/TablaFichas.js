import React, { useEffect, useState } from "react";

function TablaFichas() {
  const [fichas, setFichas] = useState([]);

  // Cargar datos del archivo JSON al montar el componente
  useEffect(() => {
    fetch("http://localhost:5000/fichas") // Asegúrate de colocar el archivo JSON en la carpeta `public`
      .then((response) => response.json())
      .then((data) => setFichas(data))
      .catch((error) => console.error("Error al cargar los datos:", error));
  }, []);

  return (
    <div className="tabla-container">
      <table className="tabla-fichas">
        <thead>
          <tr>
            <th>Ficha</th>
            <th>Coordinación</th>
            <th>Programa de Formación</th>
            <th>Jornada</th>
            <th>Trimestre</th>
          </tr>
        </thead>
        <tbody>
          {/* Verificar si hay datos disponibles */}
          {fichas.length > 0 ? (
            fichas.map((ficha) => (
              <tr key={ficha.id}>
                <td>{ficha.ficha}</td>
                <td>{ficha.coordinacion}</td>
                <td>{ficha.programa_formacion}</td>
                <td>{ficha.jornada}</td>
                <td>{ficha.trimestre}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">Cargando datos o no hay fichas disponibles</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TablaFichas;
