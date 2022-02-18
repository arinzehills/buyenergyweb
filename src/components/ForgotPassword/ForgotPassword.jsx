import React from 'react';
import ForgotPasswordHero from '../ForgotPasswordHero/ForgotPasswordHero';


    

function ForgotPassword() {

    const homeData={
        headline:'Forgot Password',
        buttonLabel:['Send Password Reset Link'],
        inputLabels:['Enter email',],
        imageRight:'images/twocircle.png',
        imageleft:'images/dullbabymobil.png',
        formType:'',
        alt1:'two circles',
        alt2:'baby',
        // onClick:click,
    }
  return <>
            <ForgotPasswordHero {...homeData} />
        </>;
}

export default ForgotPassword;
