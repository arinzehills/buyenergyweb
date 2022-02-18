import React from 'react';
import './Inputfield.css'


function InputField({label,inputStyle,inputColor,inputSize,style,readonly}) {
    const STYLES=['input--primary', 'input--shadow-purple','input--shadow-orange']
    const SIZES=['ipn--small', 'ipn--medium',
                'ipn--large', 'ipn--wide',]
    const COLOR=['purple-input', 'orange-input',];
    
            const checkInputStyle=STYLES.includes(inputStyle)?
            inputStyle:null;
            const checkInputColor=COLOR.includes(inputColor)?
                inputColor:null;
                const checkInputSize=SIZES.includes(inputSize)?
                inputSize:null;
  return <>
         <input type='text'
            style={style}
            className={`input
                ${checkInputStyle}
                ${checkInputColor}
                ${checkInputSize}
            `} 
            placeholder={label}
            readOnly={readonly}
          />
         </>;
}

export default InputField;
