import React from 'react';
import Bloque from './Bloque';
import '../stylesheet/Horario.css'

function Horario({clase , titular}){
    return(
        <table classname={clase}>
            <thead>
                <tr>
                    <th>Hora</th>
                    <th>Lunes</th>
                    <th>Martes</th>
                    <th>Miercoles</th>
                    <th>Jueves</th>
                    <th>Viernes</th>
                    <th>Sabado</th>
                </tr>
            </thead>
            <tbody>
                <tr id="Bloque1">
                    <td><span className='horaHorario'>6:00 AM - 9:00 AM</span></td>
                    <td className='lunes'><Bloque titular={titular}/></td>
                    <td className='martes'><Bloque titular={titular}/></td>
                    <td className='miercoles'><Bloque titular={titular}/></td>
                    <td className='jueves'><Bloque titular={titular}/></td>
                    <td className='viernes'><Bloque titular={titular}/></td>
                    <td className='sabado'><Bloque titular={titular}/></td>
                </tr>
                <tr id="Bloque2">
                    <td><span className='horaHorario'>9:00 AM - 12:00 M</span></td>
                    <td className='lunes'><Bloque titular={titular}/></td>
                    <td className='martes'><Bloque titular={titular}/></td>
                    <td className='miercoles'><Bloque titular={titular}/></td>
                    <td className='jueves'><Bloque titular={titular}/></td>
                    <td className='viernes'><Bloque titular={titular}/></td>
                    <td className='sabado'><Bloque titular={titular}/></td>
                </tr>
                <tr id="Bloque3">
                    <td><span className='horaHorario'>9:00 AM - 12:00 M</span></td>
                    <td className='lunes'><Bloque titular={titular}/></td>
                    <td className='martes'><Bloque titular={titular}/></td>
                    <td className='miercoles'><Bloque titular={titular}/></td>
                    <td className='jueves'><Bloque titular={titular}/></td>
                    <td className='viernes'><Bloque titular={titular}/></td>
                    <td className='sabado'><Bloque titular={titular}/></td>
                </tr>
                <tr id="Bloque4">
                    <td><span className='horaHorario'>9:00 AM - 12:00 M</span></td>
                    <td className='lunes'><Bloque titular={titular}/></td>
                    <td className='martes'><Bloque titular={titular}/></td>
                    <td className='miercoles'><Bloque titular={titular}/></td>
                    <td className='jueves'><Bloque titular={titular}/></td>
                    <td className='viernes'><Bloque titular={titular}/></td>
                    <td className='sabado'><Bloque titular={titular}/></td>
                </tr>
                <tr id="Bloque5">
                    <td><span className='horaHorario'>9:00 AM - 12:00 M</span></td>
                    <td className='lunes'><Bloque titular={titular}/></td>
                    <td className='martes'><Bloque titular={titular}/></td>
                    <td className='miercoles'><Bloque titular={titular}/></td>
                    <td className='jueves'><Bloque titular={titular}/></td>
                    <td className='viernes'><Bloque titular={titular}/></td>
                    <td className='sabado'><Bloque titular={titular}/></td>
                </tr>
                <tr id="Bloque6">
                    <td><span className='horaHorario'>9:00 AM - 12:00 M</span></td>
                    <td className='lunes'><Bloque titular={titular}/></td>
                    <td className='martes'><Bloque titular={titular}/></td>
                    <td className='miercoles'><Bloque titular={titular}/></td>
                    <td className='jueves'><Bloque titular={titular}/></td>
                    <td className='viernes'><Bloque titular={titular}/></td>
                    <td className='sabado'><Bloque titular={titular}/></td>
                </tr>
                <tr id="Bloque7">
                    <td><span className='horaHorario'>9:00 AM - 12:00 M</span></td>
                    <td className='lunes'><Bloque titular={titular}/></td>
                    <td className='martes'><Bloque titular={titular}/></td>
                    <td className='miercoles'><Bloque titular={titular}/></td>
                    <td className='jueves'><Bloque titular={titular}/></td>
                    <td className='viernes'><Bloque titular={titular}/></td>
                    <td className='sabado'><Bloque titular={titular}/></td>
                </tr>
            </tbody>
        </table>

    );
}
export default Horario;