import React from 'react';
import './Card.css'
function DashboardCard({Color,heading,description}) {

    const COLOR=['orange', 'red','blue','green',];
    const checkCardColor=COLOR.includes(Color)?
                                Color:COLOR[0]
  return <>
            <div className={`card  ${checkCardColor}`}>
                <h1>{heading}</h1>
                <p>{'NGN'+description}</p>
            </div>
        </>;
}

export default DashboardCard;
