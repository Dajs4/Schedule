import React from 'react';

const Select = ({nombre, clase}) => {
    const tipoDocumento = ["Cédula de Ciudadania", "Tarjeta de Identidad", "Cédula de Extranjeria"]
    return (
    <>  
        <select name={nombre} className={clase}>
            <option value="">{nombre}</option>
            {tipoDocumento.map((tipo, index) => (
            <option key={index} value={tipo}>{tipo}</option> // Mapear opciones
            ))}
        </select> 
    </>
  )
};

export default Select;