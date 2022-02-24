import React from 'react';
import './Inputfield.css'


function InputField({
    label,inputStyle,inputColor,inputSize,style,readonly,
    value,onHandleChange,name,onClick
    }) {
       
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
    // console.log(values.map((value)=>value.value))
    //    const valuesMap=values.map((values)=>values.value)
  return <>
         <input
         name={name}
         type='text'
            style={style}
            className={`input
                ${checkInputStyle}
                ${checkInputColor}
                ${checkInputSize}
            `} 
            placeholder={label}
            readOnly={readonly}
            value={value}
            onChange={onHandleChange}
            onClick={onClick}
          />
         </>;
        //  document.getElementsByTagName(input)[0]
}

export default InputField;
