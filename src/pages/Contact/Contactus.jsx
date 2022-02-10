import React from 'react';
import Formhero from '../../components/Formhero/Formhero';
import { homeData } from './Data';

function Contactus() {
   const homeData={
    headline:'CONTACT SUPPORT',
    buttonLabel:['Send message',],
    inputLabels:['Name..','Enter email','Message...'],
    imageRight:'images/twocircle.png',
    imageleft:'images/contact.png',
    formType:'contact',
    alt1:'',
    alt2:'',
}

  return <>

            <Formhero {...homeData} />
        </>;
}

export default Contactus;
