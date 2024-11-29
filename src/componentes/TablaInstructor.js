import React, { useState, useEffect } from 'react';
import InstructorService from '../services/InstructorServices';

const ListaComponente = () => {  // Cambié el nombre a ListaComponente
    const [instructor, setInstructores] = useState([]);

    useEffect(() => {
        InstructorService.getAllInstructores()
            .then((response) => {
                setInstructores(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className="container">
            <table className="Table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Tipo Contrato</th>
                    </tr>
                </thead>
                <tbody>
                    {instructor.map((inst) => (
                        <tr key={inst.id}>
                            <td>{inst.id}</td>
                            <td>{inst.firstName}</td>
                            <td>{inst.lastName}</td>
                            <td>{inst.tipoContrato}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListaComponente;  // Exporto el componente con el nombre correcto