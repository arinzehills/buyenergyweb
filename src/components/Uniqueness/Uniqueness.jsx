import React from 'react';
import './Uniqueness.css';

const imgs=['images/power.png','images/money.png','images/secure.png']
const heading=['Buy Energy Units','Ofline Purchase','Fast and secure'];
const desc=[
    'With buy energy you can purchase prepaid meter tokens at just a click'+
    ' and get your tokens immediately, you can also pay for post paid meters '+
    'in an easier,better, and more smarter smarter way from the comfort of your home',

    "Don't have interner connection? Don't worry Buy Energy made it possible to purchase tokens "+
    ' for your meters by using ussd code'+
    'from the anywhere',

    'With Buy energy fast and more secure way has been provided to buy tokens'+
     "You can trust us for fast and safe transactions"
    
]
function Uniqueness() {
   
  return <>
            <div className="unique-container">                           
                <div className="unique-wrapper">                           
                <h2 className='unique-header'>The Uniqueness of Buy Energy?</h2>  
                 <div className="unique-card-container">
                    <div className="unique-card">
                    <img src={imgs[0]}className='img' alt=''/>
                        <div className="card-info">
                        <h3 className='unique_heading2 '>{heading[0]}</h3>
                        <p>{desc[0]}</p>
                        </div>
                    </div>
                    <div className="unique-card">
                    <img src={imgs[1]} className='img' alt=''/>
                        <h3  className='unique_heading2 '>{heading[1]}</h3>
                        <div className="card-info">
                        <p>{desc[1]}</p>
                        </div>
                    </div> 
                    <div className="unique-card">
                    <img src={imgs[2]}className='img' alt=''/>
                        <div className="card-info">
                        <h3  className='unique_heading2 '>{heading[2]}</h3>
                        <p>{desc[2]}</p>
                        </div>
                    </div>
                 </div>
                </div>
            </div>
           
         </>;
}

export default Uniqueness;
