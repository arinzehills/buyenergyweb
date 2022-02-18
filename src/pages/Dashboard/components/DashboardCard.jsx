import React from 'react';
import './Card.css'
function DashboardCard({Color,heading,description}) {

    const COLOR=['orange', 'red','blue','green','purple2','blue2'];
    const checkCardColor=COLOR.includes(Color)?
                                Color:COLOR[0]
  return <>
            <div className={`card  ${checkCardColor}`}>
                <h1>{heading}</h1>
                <p>{description}</p>
            </div>
        </>;
}

export default DashboardCard;
