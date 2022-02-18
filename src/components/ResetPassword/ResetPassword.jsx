import React from 'react';
import Formhero from '../../components/Formhero/Formhero';
import ForgotPasswordHero from '../ForgotPasswordHero/ForgotPasswordHero';


    

function ResetPassword() {

    const homeData={
        headline:'Reset Password',
        buttonLabel:['Change Password'],
        inputLabels:['Password..','Confirm Password...'],
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

export default ResetPassword;
