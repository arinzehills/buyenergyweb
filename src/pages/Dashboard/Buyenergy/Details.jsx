import React,{useState,useEffect} from 'react'
import { Button } from '../../../components/Button/Button'
import DropDownField from '../../../components/Inputfield/DropDownField'
import InputField from '../../../components/Inputfield/InputField'
import Loader from '../../../components/Loader/Loader'
import DashboardCard from '../components/DashboardCard'

function Details({next}) {
  
  const [selected,setSelected]=useState("Select Biller");
  const [selectMeterType,setSelectMeterType]=useState("Select Meter Type"); 
  const selectBiller=['abuja-electric(AEDC)','eko-electric(EKEDC) ','ibadan-electric(IBEDC)',
  'ikeja-electric(IKEDC)','jos-electric(JEDplc)','kaduna-electric(KAEDCO)',
  'kano-electric(KEDCO)','portharcourt-electric(PHED)']
  const meterType=['prepaid','postpaid',]
  const initialValues={ amount:"",phone:"", meter_number:"",}
  const [formValues,setFormValues]=useState(initialValues);
  const [responseError,setResponseError]=useState('');
  const [formErrors,setFormErrors]=useState({});
  const [isSubmit,setIsSubmit]=useState(false);
  const [loading,setLoading]=useState(false);
  
    const handleChange=(e)=>{
      const {name,value}=e.target;
      setFormValues({...formValues,[name]:value.trimLeft().trimRight()})

    //   console.log(formValues)
      // console.log(e.target)
  };
    const order_data={
      amount: formValues.amount,
      meter_number: formValues.meter_number,
      phone: formValues.phone,
      biller: selected,
      meterType: selectMeterType,
    }
    
    const onSubmit=(e)=>{
        e.preventDefault();        
        setFormErrors(validate(formValues))
        setIsSubmit(true)
    };
    useEffect(()=>{
        // setLoading(true)
        if(Object.keys(formErrors).length===0 && isSubmit){
            // setLoading(true)
            verifyCustomer()
            
        }
    },[formErrors])

    const verifyCustomer=async ()=>{//function that verifies customer meter number
        setLoading(true)
        const serviceID=selected.split('(')[0]
        const customers_data = { 
                    billersCode:formValues.meter_number,
                    serviceID:serviceID,
                    type: selectMeterType,
                    };
    // const url="http://localhost/buyenergy_api/public/api/verifyCustomer";
    // const url="https://buyenergy.herokuapp.com/public/api/";
    const url=window.baseUrl + "verifyCustomer";
    
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
                body:JSON.stringify(customers_data)
                  
            })
            .then(response => response.json())
            .then(data => {
           
            // console.log( data['token']);

            if(data['success']===true){                
                console.log( data);
                const addr=data['address']
                const cust_name=data['customer_name']
                Object.assign(order_data,{address:addr,customer_name:cust_name})
                next({...order_data})  
                // console.log(order_data)
                setLoading(false)

            }else{
                const error=data['error']
                console.log(error)
                  setResponseError(error)
                  setLoading(false)
            }
            // console.log('Success:', data);
            })
            .catch((error) => {
            console.warn('Error:', error);
            });
    }
    const validate=(values)=>{
        const errors={}
        if(!values.phone){
            errors.phone="Phone no is required"
        }
        if(!values.meter_number){
            errors.meter_number="Meter no is required"
        }
        if(!values.amount){
            errors.amount="Amount  is required"
        }
        if(selected==='Select Biller'){
            errors.selectBiller="Please select a biller"
            console.log(selected)
        }
        if(selectMeterType==='Select Meter Type'){
            errors.selectMeterType="Please select meter type"
            console.log(selectMeterType)
        }
        return errors
        
    }
  return (
    <>
    {loading ? 
    <Loader description='verifying customer please wait!' /> 
    : 
    <form  onSubmit={onSubmit}>
          <div className="buy-airtime-form">
            <DropDownField 
            selected={selected}
            setSelected={setSelected}
            options={selectBiller}
            inputSize={window.innerWidth < 960 ? 'ipn--small' : 'ipn--wide' }
            inputColor='purple-input'
            />
            <p className='errors'>{formErrors.selectBiller}</p>
              <div className="form-row">
                <DropDownField 
                selected={selectMeterType}
                setSelected={setSelectMeterType}
                options={meterType}
                inputSize='ipn-wide'
                // isActive={isActive}
                // setIsActive={setIsActive}
                inputColor='purple-input'
              />
              <p className='errors'>{formErrors.selectMeterType}</p>
              <InputField inputColor='purple-input' 
              onHandleChange={handleChange}
              label='Meter number'
              value={formValues.meter_number}
              name="meter_number"
              />
              <p className='errors'>{formErrors.meter_number}</p> 
             
            </div>
            <InputField inputColor='purple-input' 
              onHandleChange={handleChange}
              label='Phone number'
              value={formValues.phone}
              name="phone"
              inputSize={window.innerWidth < 960 ? 'ipn--medium' : 'ipn--wide' }
              />
              <p className='errors'>{formErrors.phone}</p> 
            <InputField inputColor='purple-input' label='Amount'
            name='amount'
            onHandleChange={handleChange}
            value={formValues.amount}
            inputSize={window.innerWidth < 960 ? 'ipn--medium' : 'ipn--wide' }/>
            <p className='errors'>{formErrors.amount}</p>
            <p className='errors'>{responseError ?? ''}</p> 
            <Button buttonColor='purple'  >
              Continue
            </Button>
          </div>
    </form>}
    </>
  )
}

export default Details