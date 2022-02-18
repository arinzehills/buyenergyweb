import React from 'react';
import { Button } from '../../../components/Button/Button';
import './ListCard.css'
function ListCard() {

  return <>
            <div className="list-card-section">
              <h2>Transactions </h2>
                <div className="list-card transactions-input">   
                    <h4>Nepa Bill</h4>
                    <h4>N5000</h4>
                    <h4>June 21st 2019</h4>
                </div>
            </div>
        </>;
}

export default ListCard;
