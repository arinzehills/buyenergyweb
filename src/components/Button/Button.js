import React from 'react';
import './Button.css';

const STYLES=['btn--primary', 'btn--outline-purple','btn--outline-orange']
const SIZES=['btn-medium', 'btn-large',
             'btn-mobile', 'btn-wide',]
const COLOR=['purple', 'orange',];

export const Button=({
    children,
    type,onClick,
    buttonStyle,
    buttonSize,
    buttonColor,
})=>{
        const checkButtonStyle=STYLES.includes(buttonStyle)?
                                 buttonStyle:null;
         const checkButtonSize=SIZES.includes(buttonSize)?
                                 buttonSize:SIZES[0];
         const checkButtonColor=COLOR.includes(buttonColor)?
                             buttonColor:null;
         return(
             <button className={`btn ${checkButtonStyle} 
             ${checkButtonSize} ${checkButtonColor}`}
             onClick={onClick}
             type={type}>{children}</button>
         )
}