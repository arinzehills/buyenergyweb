import React from 'react';
import { Button } from '../../components/Button/Button';
import {useNavigate} from 'react-router-dom';
import Formhero from '../../components/Formhero/Formhero';


    

function Login() {
    const router=useNavigate()

// const click=()=>
    const homeData={
        headline:'Login',
        buttonLabel:['dashboard','Register'],
        inputLabels:['Name..','Enter email','Password...'],
        imageRight:'images/twocircle.png',
        imageleft:'images/dullbaby1.png',
        formType:'',
        alt1:'two circles',
        alt2:'baby',
        // onClick:click,
    }
  return <>
            <Formhero {...homeData} />
            {/* <Button  buttonColor='orange' children='ddsajkasd'>dajdhs</Button> */}
        </>;
}

export default Login;
