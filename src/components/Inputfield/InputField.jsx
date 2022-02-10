import React from 'react';
import './Inputfield.css'


function InputField({label,inputStyle,inputColor,style}) {
    const STYLES=['input--primary', 'input--shadow-purple','input--shadow-orange']
    // const SIZES=['btn--medium', 'btn--medium',
    //             'btn--medium', 'btn--wide',]
    const COLOR=['purple-input', 'orange-input',];
    
            const checkInputStyle=STYLES.includes(inputStyle)?
            inputStyle:null;
            const checkInputColor=COLOR.includes(inputColor)?
                inputColor:null;
  return <>
         <input type='text'
            style={style}
            className={`input
                ${checkInputStyle}
                ${checkInputColor}
            `} 
            placeholder={label} 
          />
         </>;
}

export default InputField;
