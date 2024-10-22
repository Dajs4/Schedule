import React from 'react';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'; // Importa el ícono

function SearchBar({ tamaño }) {
    return (
        <div className="search-bar-container" style={{ position: 'relative' }}>
            {/* Ícono de búsqueda */}
            <MagnifyingGlassIcon 
                style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#00324D' }} 
                width={20} 
                height={20} 
            />
            <input
                type="text"
                className={`searchBar ${tamaño}`}
                placeholder="Buscar"
                style={{ paddingLeft: '30px' }} // Ajusta el padding para dar espacio al ícono
            />
        </div>
    );
}

export default SearchBar;
