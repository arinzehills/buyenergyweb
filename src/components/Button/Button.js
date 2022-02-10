import React from 'react';
import './Button.css';



export const Button=({
    children,
    type,onClick,
    buttonStyle,
    buttonSize,
    buttonColor,
    style,
})=>{
    const STYLES=['btn--primary', 'btn--outline-purple','btn--outline-orange']
const SIZES=['btn--medium', 'btn--medium',
             'btn--medium', 'btn--wide',]
const COLOR=['purple', 'orange',];
        const checkButtonStyle=STYLES.includes(buttonStyle)?
                                 buttonStyle:null;
         const checkButtonSize=SIZES.includes(buttonSize)?
                                 buttonSize:SIZES[0];
         const checkButtonColor=COLOR.includes(buttonColor)?
                             buttonColor:null;
         return(
             <button style={style} className={`btn ${checkButtonStyle} 
             ${checkButtonSize} ${checkButtonColor}`}
             onClick={onClick}
             type={type}>{children}</button>
         )
}