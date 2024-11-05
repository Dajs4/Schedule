import React from 'react';
import '../stylesheet/Cards.css'

function Cards({ iconCard: Icon, iconClass, titulo, text }) {
    return (
        <section className="card">
            <div className="iconCard">
                {Icon && <Icon className={iconClass} />}
            </div>

            <div className="cardCont">
                <div className="cardTitle">
                    {titulo}
                </div>
                <div className="cardtext">
                    {text}
                </div>
            </div>
        </section>
    );
}

export default Cards;

