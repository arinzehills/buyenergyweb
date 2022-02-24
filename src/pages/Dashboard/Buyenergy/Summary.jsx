import React from 'react'
import { Button } from '../../../components/Button/Button';
import useUser from '../../../useUser';
import './Buyenergy.css'
import FlutterHookForm from './FlutterHookForm';

function Summary({electData,backStep,nextStep,setLoading}) {
    const {user, setUser} = useUser();
    const email=user?.['email']
    const id=user?.['id']

    Object.assign(electData,{email: email,user_id:id})
    // Object.entries(electData).forEach(([key, value]) => {
    //     console.log(`${key}: ${value}`)
    // });
    
  return (
            <>
            <div className="summary-card">
                <div className="summary-header">
                   <h1> Order Information</h1>
                </div>
                <div className="summary-column">
                    { Object.entries(electData).map(([key, value]) => (
                        //  console.log(`${key}: ${value}`)
                         <div className="summary-row" key={key}>
                            <p>{key}</p>
                            <p>{value}</p>
                            </div>)
                    )}
                    {Object.entries(electData).forEach(([key,value])=>
                     <div className="summary-row">
                        <p>dds</p>
                        <p>dad</p>
                    </div>
                    )}
                </div>
                <div className="summary-buttons">
                    <Button buttonColor='orange'  
                     onClick={backStep}
                    >
                        Back
                    </Button>
                    <FlutterHookForm electData={electData} nextStep={nextStep} 
                      setLoading={setLoading}
                    />
                </div>
            </div>
            </>
            
  )
}

export default Summary