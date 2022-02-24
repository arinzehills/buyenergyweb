import React, { useState,useEffect } from 'react'
import { Button } from '../../../components/Button/Button';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';

function FlutterHookForm({electData,nextStep,setLoading}) {
    
    const [isSuccessful,setisSuccessful]=useState(false);
    // console.log(electData)
    useEffect(()=>{
        next();
    },[isSuccessful])

    const config = {
      public_key: 'FLWPUBK_TEST-b6fec30caf684ee6845762074efb8ce3-X',
      tx_ref: Date.now(),
      amount:electData?.['amount'],
      currency: 'NGN',
      payment_options: 'card,mobilemoney,ussd',
      customer: {
        email: electData?.['email'] ?? 'user@gmail.com',
        phonenumber: electData?.['phone'] ??'07064586146',
        name: electData?.['customer_name'] ?? 'joel ugwumadu',
      },
      customizations: {
        title: 'Electricity bill',
        description: 'Payment for electricity token',
        logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
      },
    };
    
    const handleFlutterPayment = useFlutterwave(config);
    const next=()=>{
        
        setisSuccessful(true)
      }
    return (
        <Button 
            buttonColor='purple'
          onClick={() => {
            handleFlutterPayment({
                
              callback: (response) => {
                 console.log(response);
                  // closePaymentModal()
                  
                  if(response.status == 'successful'){
                    // console.log(response.status)
                    // console.log(response.amount)
                    
                    if(isSuccessful===true){
                        closePaymentModal()
                        nextStep();
                    }
                    console.log(isSuccessful)
                  }
                  // console.log(response); // this will close the modal programmatically
              },
              onClose: () => { 
                console.log('closed')
                // Confirmation() 
                
                // if(isSuccessful===true){
                //     nextStep();
                //     closePaymentModal()
                // }
            },
            });
          }}
        >
         Continue
        </Button>
    )
}

export default FlutterHookForm