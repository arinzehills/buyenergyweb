import React from 'react';
import { Button } from '../../../components/Button/Button';
import './ListCard.css'
function ListCard() {

  return <>
            <div className="section">
                <div className="card transactions-input">   
                <div className="button-div">
                    
                   <Button buttonColor='orange' children='delete' />
                 </div>                                 
                    <div className="row-one">
                    </div>  
                    <div className="row-one">
                    </div>
                </div>
            </div>
        </>;
}

export default ListCard;
