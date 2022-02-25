import { useState,useEffect } from 'react';

export default function useToken(url) {
    const initialValues={ email:"", password:""}
    const [formValues,setFormValues]=useState(initialValues);
  const [responseError,setResponseError]=useState('');
  const [formErrors,setFormErrors]=useState({});
    const [isSubmit,setIsSubmit]=useState(false);
    const [loading,setLoading]=useState(false);
    const history=useNavigate()

        // console.log(inputValues)
        const onSubmit=(e)=>{
            e.preventDefault();
            setFormErrors(validate(formValues))
            setIsSubmit(true)
            console.log(formValues)
    
        };

    useEffect(()=>{
        // setLoading(true)
        console.log(formErrors)
        if(Object.keys(formErrors).length===0 && isSubmit){
            // setLoading(true)
            console.log(formValues)
            fetchFunction()
            
        }
    },[formErrors])

    const fetchFunction=async ()=>{
        setLoading(true)
        const data = 
        // {...initialValues
                    
        //                 }
        
                 { 
                    email: formValues.email,
                    password:formValues.password 
                    };
    const _url=url;
    // const url="https://buyenergy.herokuapp.com/public/api/";
    
        fetch(
            _url,
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

            if(data['success']===true){                
            
              const  token=data['token']
              const  user=data['user']
             
                // setToken(token)
                // setUser(user)
                //    history('/dashboard')
                setLoading(false)

            }else{
                const error=data['message']
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
    // console.log(loading)
    const validate=(values)=>{
        const errors={}
        const regex=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(!values.email){
            errors.email="Email is required"
        }else if(!regex.test(values.email)){
            errors.email="Please enter a valid email address"
        }
        if(!values.password){
            errors.password="Password is required"
        }

        return errors
        
    }
}