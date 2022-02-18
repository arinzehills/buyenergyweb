import React from 'react';
import { Button } from '../Button/Button';
import InputField from '../Inputfield/InputField';
import {FaTwitter,FaWhatsapp,FaFacebook} from 'react-icons/fa';
import './Formhero.css'
import { Link, useNavigate } from 'react-router-dom';
function Formhero({
    headline,
    showButton,
    onClick,
    imageRight,
    imageleft,
    formType, 
    buttonLabel,
    inputLabels,
    alt1,
    alt2,
  }) {

    const images=['']
    const history=useNavigate()
    function handleSubmit(e) {
        e.preventDefault();

        history('/dashboard');
    }
  return <>
            <div className="form-hero-section">
                <div className="container">
                <div
                    className='row form-hero-row'
                    style={{
                        display: 'flex',
                        flexDirection:'row'
                    }}
                    >
                    <div className='right__hero-img-wrapper'>
                    <img src={imageleft} alt={alt2} className='right__hero-img' />
                    </div>
                   <div className="form__hero-text-wrapper">
                           
                    <div className="form-col">
                            <div className="form-col">
                            <div className='left__hero-img-wrapper'>
                                    <img src={imageRight} alt={alt1} className='left__hero-img' />
                                </div>
                                
                        <h1 className='headline' >
                            {headline}
                        </h1>
                            </div>
                        <div className="form-col btn-wrapper">
                            <div style={{
                                display: 'flex',
                                flexWrap:'wrap',
                                flexDirection:'column'}}>
                            
                                {inputLabels.slice(0,2).map((label)=>//pick the first 3elements
                                  <div style={{marginTop:'10px'}}>
                                    <InputField label={label}
                                    inputStyle='input--shadow-purple' 
                                    inputColor='purple-input'
                                    /></div>
                                )}
                                {(formType=='contact'  || formType=='register')  && 
                                    <div style={{marginTop:'10px'}}>
                                    <InputField label={inputLabels[2]}
                                    inputStyle='input--shadow-purple' 
                                    inputColor='purple-input'
                                    /></div>
                                }
                            </div>  
                            {/* {buttonLabel.map((label,color)=>
                            <div style={{marginTop:'30px'}}>
                            <Button  buttonColor='purple' 
                                    buttonSize='btn--mobile'
                                    style={{width:'100%'}}>
                                {label}
                            </Button >
                            <div className="hr-wrapper">
                                    <hr className='hr'></hr>
                                    <p className='hr-p '>OR</p>
                                    <hr className='hr'></hr>
                             </div>
                            </div>)} */}
                            {/* this is for contact */}
                            {formType=='contact'?
                            <div style={{marginTop:'10px'}}>
                            <Button  buttonColor='purple' 
                                    buttonSize='btn--mobile'
                                    style={{width:'100%'}}>
                                Send message
                            </Button >
                            <div className="hr-wrapper">
                                    <hr className='hr'></hr>
                                    <p className='hr-p '>OR</p>
                                    <hr className='hr'></hr>
                             </div>
                             <div className="hr-icons">

                                   <FaFacebook className='icons'/>
                                   <FaWhatsapp className='icons'/>
                                   <FaTwitter className='icons'/>
                             </div>
                            </div> : //for register and sign up
                             <div style={{marginTop:'10px'}}>
                            {/* <Link to={'/'+ buttonLabel[0]} > */}
                             <Button  buttonColor='orange' 
                                    onClick={()=>history('/dashboard')}
                                    buttonSize='btn--mobile'
                                    style={{width:'100%'}}>
                                    {buttonLabel[0]}  
                            </Button >                            
                            {/* </Link> */}
                            <div className="hr-wrapper">
                                    <hr className='hr'></hr>
                                    <p className='hr-p '>OR</p>
                                    <hr className='hr'></hr>
                             </div>
                            <Link to={'/'+buttonLabel[1]} >
                             <Button  buttonColor='purple' 
                                    buttonSize='btn--mobile'
                                    style={{width:'100%'}}>
                                    {buttonLabel[1]}  
                            </Button >                            
                            </Link>
                            </div> }

                            </div>
                         </div>
                        </div>
                    </div>
                </div>
            </div>
         </>;
}

export default Formhero;
