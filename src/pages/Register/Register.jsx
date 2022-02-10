import React from 'react';
import Formhero from '../../components/Formhero/Formhero';

const Register = () => {
    const homeData={
        headline:'Register',
        buttonLabel:['Sign up','Login'],
        inputLabels:['Name..','Enter email','Password...'],
        imageRight:'images/twocircle.png',
        imageleft:'images/dullbaby.png',
        formType:'register',
        alt1:'two circles',
        alt2:'baby',
    }
  return <><Formhero {...homeData} /></>;
};

export default Register;
