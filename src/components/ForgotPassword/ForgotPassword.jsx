import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import ForgotPasswordHero from '../ForgotPasswordHero/ForgotPasswordHero';
import Loader from '../Loader/Loader';
import Modal from '../Modal/Modal';

function ForgotPassword() {
    const initialValues={ email:"",}
    const [formValues,setFormValues]=useState(initialValues);
  const [responseError,setResponseError]=useState('');
  const [isSubmit,setIsSubmit]=useState(false);
  const [loading,setLoading]=useState(false);
  const [showModal,setShowModal]=useState(false);
  const [formErrors,setFormErrors]=useState({});
  const history=useNavigate()
  const inputValues=[
    formValues.email,
]
const inputNames=[
    'email',    
    ]  
    const inputErrors=[
        formErrors.email,
    ]
  const validate=(values)=>{
        const errors={}
        const regex=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(!values.email){
            errors.email="Email is required"
        }else if(!regex.test(values.email)){
            errors.email="Please enter a valid email address"
        }
        return errors    
    }
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormValues({...formValues,[name]:value.trimLeft().trimRight()})

        console.log(formValues)
        // console.log(e.target)
    };
    // console.log(inputValues)
    const onSubmit=(e)=>{
        e.preventDefault();
        setFormErrors(validate(formValues))
        setIsSubmit(true)

    };
    useEffect(()=>{
        // setLoading(true)
        if(Object.keys(formErrors).length===0 && isSubmit){
            // setLoading(true)
            forgotPassword()
            
        }
    },[formErrors])
    const forgotPassword=async ()=>{
        setLoading(true)
        const data = { 
                    email: formValues.email,
                    password:formValues.password 
                    };
    // const url="http://localhost/buyenergy_api/public/api/forgotPassword";
    // const url="https://buyenergy.herokuapp.com/public/api/";
    const url=window.baseUrl + "forgotPassword";
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
                body:JSON.stringify(data)
                  
            })
            .then(response => response.json())
            .then(data => {
            console.log( data);
            // console.log( data['token']);

            if(data['status']==='passwords.sent'){                
                setShowModal(true)
                setLoading(false)

                }else{
                    const error='Please wait for a moment before requesting again' 
                                     
                    // console.log(error)
                    setResponseError(error)
                    setLoading(false)
                }
            })
            .catch((error) => {
            console.warn('Error:', error);
            });
    }
    const homeData={
        headline:'Forgot Password',
        buttonLabel:['Send Password Reset Link'],
        inputLabels:['Enter email',],
        inputValues:inputValues,
        inputNames:inputNames,
        imageRight:'images/twocircle.png',
        imageleft:'images/dullbabymobil.png',
        formType:'',
        alt1:'two circles',
        alt2:'baby',
        // onClick:click,
    }
  return <>
            <div>
                {showModal && <Modal
                  isSuccess={true}
                  heading='Email Link has been sent successfully!'
                setOpenModal={setShowModal}
                onClick={()=>{history('/login')}}
                />}
                {loading ?
                <Loader />
                :
                <ForgotPasswordHero
                {...homeData} 
                handleChange={handleChange}
                onSubmit={onSubmit}
                formErrors={inputErrors}
                responseError={responseError}
                />}
             </div>
        </>;
}

export default ForgotPassword;
