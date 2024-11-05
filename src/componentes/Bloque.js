import React from 'react';
import '../stylesheet/Bloque.css'

function Bloque({ tematica, instrcutor, ficha, ambiente, titular }) {
    return (
        <>
            {titular !== 'tematica' && <div className="tematica">{"tematica"}</div>}
            {titular !== 'instructor' && <div className="instructor">{"instrcutor"}</div>}
            {titular !== 'ficha' && <div className="ficha">{'ficha'}</div>}
            {titular !== 'ambiente' && <div className="ambiente">{'ambiente'}</div>}
        </>
    );
}

export default Bloque;
