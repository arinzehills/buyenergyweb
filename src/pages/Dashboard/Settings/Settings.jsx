import React,{useState,useEffect} from 'react'
import { Button } from '../../../components/Button/Button'
import InputField from '../../../components/Inputfield/InputField'
import {FaUserCircle} from 'react-icons/fa'
import useUser from '../../../useUser'
import useToken from '../../../useToken'
import Loader from '../../../components/Loader/Loader'
import { useNavigate } from 'react-router-dom'
import Modal from '../../../components/Modal/Modal'

function Settings() {
  // const data=['Name','Email','Phone'];
  const history=useNavigate()
    const [loading,setLoading]=useState(false)
    const [message,setMessage]=useState('')
    const { token, setToken } = useToken();     
    const {user, setUser} = useUser();
    const [isSubmit,setIsSubmit]=useState(false);
  const [showModal,setShowModal]=useState(false);
    const initialValues={ 
      name:user?.['name'] ?? '',
      meter_number:user?.['meter_number'] ?? '',
      // email:user['email'], 
      phone:user?.['phone'] ?? '',
      address:user?.['address'] ?? '',    
    }
    const [formValues,setFormValues]=useState(initialValues);
    const handleChange=(e)=>{
      const {name,value}=e.target;
      setFormValues({...formValues,[name]:value})

      console.log(formValues)
      // console.log(e.target)
    };
    const onSubmit=(e)=>{
      e.preventDefault();
      // setFormErrors(validate(formValues))
      setIsSubmit(true)
      // console.log(formValues)

  };
  useEffect(()=>{
    if(isSubmit){
        console.log(formValues)        // login()
        update()
    }
},[isSubmit])
const update=async ()=>{
  setLoading(true)
  const data = { 
              name: formValues.name,
              phone:formValues.phone ,
              meter_number:formValues.meter_number ,
              address:formValues.address 
              };
// const url=`http://localhost/buyenergy_api/public/api/update?token=${token}`;
    const url=window.baseUrl + `update?token=${token}`;
    // const url="https://buyenergy.herokuapp.com/public/api/";
  // console.log(url)
  // console.log(data)
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

        if(data['success']===true){                
        
          const  message=data['message']
          const  user=data['user']
        
            setMessage(message)
            setUser(user)
              //  history('/dashboard')
            setLoading(false)
            setIsSubmit(false)
            setShowModal(true)

        }else{
            const error=data['message']
            console.log(error)
              // setResponseError(error)
              setLoading(false)
        }
        // console.log('Success:', data);
        })
        .catch((error) => {
        console.warn('Error:', error);
        });
}
  //  const  onChangePassword=(e)=>{
  //     e.preventDefault();
  //    history('/dashboard');
  //   }
  
  return (
    <>
    {loading ? 
            <Loader />
            
            : 
                <form  onSubmit={onSubmit}>
                  {showModal && <Modal
                  isSuccess={true}
                  heading='Information has been updated successfully!'
                setOpenModal={setShowModal}
                onClick={setShowModal}
                />}
          <div className="buy-airtime-section">
                <FaUserCircle  className='user-circle'/>
              <h1 className='airtime-header' >Settings</h1>
              <div className="buy-airtime-form">            
                
                <h3 className="profile-p">Name</h3>
                  <InputField inputColor='purple-input' label={user?.['name']  ?? 'name'}
                inputSize={window.innerWidth < 960 ? 'ipn--medium' : 'ipn--wide' }
                  value={formValues.name}
                  name='name'
                  onHandleChange={handleChange}
                />
                  <h3 className="profile-p">Address</h3>
                <InputField inputColor='purple-input' label={user?.['address']  ?? 'no address added'}
                inputSize={window.innerWidth < 960 ? 'ipn--medium' : 'ipn--wide' }
                name='address'
                value={formValues.address}
                onHandleChange={handleChange}
                />
                 <h3 className="profile-p" style={{paddingLeft:'2em'}}>Meter Number</h3>
                <InputField inputColor='purple-input' label={user?.['meter_number']  ?? 'no meter_number added'}
                inputSize={window.innerWidth < 960 ? 'ipn--medium' : 'ipn--wide' }
                name='meter_number'
                value={formValues.meter_number}
                onHandleChange={handleChange}
                />
                  <h3 className="profile-p">Phone</h3>
                <InputField inputColor='purple-input' label={user?.['phone']  ??'no phone no added'}
                inputSize={window.innerWidth < 960 ? 'ipn--medium' : 'ipn--wide' }
                value={formValues.phone}
                name='phone'
                onHandleChange={handleChange}
                />
                
                    <div className="form-row">
                      <div className="form-column">
                        <h3 className="">Email</h3>
                        <InputField inputColor='purple-input' 
                        label={user?.['email']  ??'No email added'} 
                        // value={formValues.email}
                        name='email'
                        // onHandleChange={handleChange} 
                        readonly={true}               
                      />
                      </div>
                      <div className="form-column">
                          <h3 className="">Password</h3>
                        <InputField inputColor='purple-input' 
                        label={user?.['passsword']  ??'********'} 
                        onClick={()=>{history('/forgotPassword')}}
                        readonly={true}/>
                      </div>
                    </div>

                <Button   buttonColor='purple'  >
                  Update
                </Button>
              </div>
          </div>
      </form>}
    </>
  )
}

export default Settings