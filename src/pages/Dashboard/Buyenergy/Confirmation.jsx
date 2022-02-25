import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../components/Button/Button'
import Loader from '../../../components/Loader/Loader'
import useUser from '../../../useUser';
import './Buyenergy.css'
function Confirmation({backStep,electData}) {
    const {user, setUser} = useUser();
    // console.log (loading)
    // console.log(buyenergyinfo) 
  const [loading,setLoading]=useState(false);
  const [purchaseData,setPurchaseData]=useState('');
  const [transactionMessage,setTransactionMessage]=useState();
  const history=useNavigate()
    useEffect(()=>{
        buyElectricity()
    },[])
    const user_id=user?.['id']
    const serviceID=electData?.['biller'].split('(')[0]
    const buyenergyinfo={
        user_id:user_id,
        serviceID:serviceID,
        billersCode:electData?.['meter_number'],
        variation_code:electData?.['meterType'],
        amount:electData?.['amount'],
        phone:electData?.['phone'],
    }

    console.log(buyenergyinfo) 
    const buyElectricity=async ()=>{
        setLoading(true)
      
    // const url="http://localhost/buyenergy_api/public/api/buyElectricity";
    // const url="https://buyenergy.herokuapp.com/public/api/";
    const url=window.baseUrl + "buyElectricity";
        fetch(
            url,
            {
                // credentials: 'include
                // Authorization:'http://localhost:8000/api/user',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept':'application/json',
                    // 'Authorization': 'http://localhost:8000/api/user',
                  },
                method:'POST',
                body:JSON.stringify(buyenergyinfo)
                  
            })
            .then(response => response.json())
            .then(data => {
           
            // console.log( data['token']);

            if(data['success']===true){                
                console.log( data); 
                const token =data?.['purchased_code'].split(':')[1]
                // Object.assign(data, {success: 'True',})
                setPurchaseData({
                    status:'successful',
                    request_id:data?.['requestId'],
                    token:token,
                    bonus:data?.['bonus'] ?? 'No bonus',
                })
                setLoading(false)
                setTransactionMessage('Thank you for the purchase!')

            }else{
                const error=data['error']
                console.log(error)
                //   setResponseError(error)
                  setLoading(false)
                  setTransactionMessage('Unable to complete order')
            }
            // console.log('Success:', data);
            })
            .catch((error) => {
            console.warn('Error:', error);
            });
    }
  return (
    <>    
    {loading ? 
    <Loader description='Processing request please wait!'/> 
       : 
    <div className="summary-card">
                <div className="summary-header purple">
                   <h1> {transactionMessage}  </h1>
                </div>
                <div className="summary-column">
                    
                    {transactionMessage==='Thank you for the purchase!'
                    
                    ? Object.entries(purchaseData).map(([key, value]) => (
                        //  console.log(`${key}: ${value}`)
                         <div className="summary-row" key={key}>
                            <p>{key}: </p>
                            <p>{value}</p>
                            </div>)
                    ):<h3> Order Error</h3>
                     }
                     {/* <div className="summary-row" >
                            <p>key</p>
                            <p>value</p>
                     </div> */}
                </div>
                <div className="conf-image">
                     <img src="/images/dullbabymobil.png" alt="dullbaby"                        
                                 className='conf-img' 
                        />
                </div>
                <div className="summary-buttons">
                    <Button buttonColor='orange'  
                     onClick={backStep}
                    >
                        Back
                    </Button>
                    {/* <FlutterHookForm electData={electData} nextStep={nextStep} /> */}
                    <Button buttonColor='purple' 
                        onClick={()=>history('/dashboard')}
                    >
                        Go To Home 
                    </Button>
                </div>
            </div>
    }
    
    </>
  )
}

export default Confirmation