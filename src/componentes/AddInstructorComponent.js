import React, { useState } from "react";
import {Link, useNavigate} from 'react-router-dom';
import InstructorServices from "../services/InstructorServices";

export const AddInstructorComponent = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [tipoContrato, setTipoContrato] = useState('');
    const navigate = useNavigate();

    const saveInstructor = (e) => {
        e.preventDefault();
        const instructor = { firstName, lastName, tipoContrato};
        InstructorServices.createInstructor(instructor).then((response) => {
            console.log(response.data);
            navigate('/instructor')
        }).catch((error) => {
            console.log(error);
            alert('Error saving instructor');
        })
    }


    return (
        <div>
            <h2>Add Instructor</h2>
            <form onSubmit={saveInstructor}>
                <div>
                    <label>First Name:</label>
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div>
                    <label>Tipo Contrato:</label>
                    <input type="text" value={tipoContrato} onChange={(e) => setTipoContrato(e.target.value)} />
                </div>
                <div>
                    <button type="submit" onClick={(e) => saveInstructor(e)}>guardar</button>
                </div>
            </form>

        </div>
    )

}

export default AddInstructorComponent;