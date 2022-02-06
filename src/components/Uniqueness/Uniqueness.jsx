import React from 'react';
import './Uniqueness.css';

const imgs=['images/power.png','images/money.png','images/secure.png']
const heading=['Buy Energy Units','Ofline Purchase','Fast and secure'];
const desc=['Buy energy gives you the freedom tobuy energy units'+
'in an easier,better, smarter and more secure way from'+
'from the conformt of your home','Buy energy gives you the freedom tobuy energy units'+
'in an easier,better, smarter and more secure way from'+
'from the conformt of your home,Buy energy gives you the freedom tobuy energy units'+
'in an easier,better, smarter and more secure way from'+
'from the conformt of your home']
function Uniqueness({}) {
   
  return <>
            <div className="unique-container">                           
                <div className="unique-wrapper">                           
                <h2 className='unique-header'>The Uniqueness of Buy Energy?</h2>  
                 <div className="unique-card-container">
                    <div className="unique-card">
                    <img src={imgs[0]}className='img'/>
                        <div className="card-info">
                        <h3 className='unique_heading2 '>{heading[0]}</h3>
                        <p>{desc[0]}</p>
                        </div>
                    </div>
                    <div className="unique-card">
                    <img src={imgs[1]} className='img'/>
                        <h3  className='unique_heading2 '>{heading[1]}</h3>
                        <div className="card-info">
                        <p>{desc[0]}</p>
                        </div>
                    </div> 
                    <div className="unique-card">
                    <img src={imgs[2]}className='img'/>
                        <div className="card-info">
                        <h3  className='unique_heading2 '>{heading[2]}</h3>
                        <p>{desc[0]}</p>
                        </div>
                    </div>
                 </div>
                </div>
            </div>
           
         </>;
}

export default Uniqueness;
