import React, { useState } from 'react';

function Drapdown({ nombre }) {
    // Simular datos que se mostrarán en el datalist
    const opciones = [
        "Opcion1", "Opcion2", "Opcion3", "Opcion4", "Opcion5", 
        "Opcion6", "Opcion7", "Opcion8", "Opcion9", "Opcion10", 
        "Opcion11", "Opcion12", "Opcion13", "Opcion14", "Opcion15", "Opcion16"
    ];

    // Estado para manejar la visibilidad del dropdown y la selección
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [isLabelVisible, setIsLabelVisible] = useState(true);  // Estado para el label

    // Manejar la apertura y cierre del dropdown
    const toggleDropdown = () => setIsOpen(!isOpen);

    // Manejar el filtrado basado en lo que el usuario escribe
    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        setIsLabelVisible(value === '');  // Ocultar label si hay texto
    };

    // Manejar la selección de una opción
    const handleOptionClick = (opcion) => {
        setInputValue(opcion);
        setIsOpen(false); // Cerrar el dropdown cuando se selecciona
        setIsLabelVisible(false);  // Ocultar label después de seleccionar una opción
    };

    // Manejar el foco en el input
    const handleFocus = () => {
        setIsLabelVisible(false); // Ocultar label al hacer clic en el input
        setIsOpen(true); // Abrir el dropdown
    };

    // Manejar el desenfoque del input
    const handleBlur = () => {
        if (inputValue === '') {
            setIsLabelVisible(true); // Mostrar label si el input está vacío
        }
        setIsOpen(false); // Cerrar el dropdown
    };

    return (
        <div className="datalist-container">
            {/* Condicionalmente renderizar el label */}
            {isLabelVisible && <label htmlFor={nombre} className="titleOptions">{nombre}</label>}

            {/* Input con evento de cambio y dropdown */}
            <input 
                type="text" 
                id={nombre} 
                className="dataList" 
                value={inputValue} 
                onFocus={handleFocus} 
                onChange={handleInputChange} 
                onBlur={handleBlur}
                placeholder="Seleccione una opción..."
            />

            {/* Dropdown personalizado */}
            {isOpen && (
                <ul className="dropdown">
                    {opciones.slice(0, 5).map((opcion, index) => (
                        <li key={index} className="dropdown-item" onClick={() => handleOptionClick(opcion)}>
                            {opcion}
                        </li>
                    ))}
                    {opciones.length > 5 && (
                        <li className="dropdown-item scrollable">Más opciones disponibles...</li>
                    )}
                </ul>
            )}
        </div>
    );
}

export default Drapdown;
