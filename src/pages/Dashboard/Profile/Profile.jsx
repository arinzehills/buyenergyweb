import React,{useState} from 'react'
import { Button } from '../../../components/Button/Button'
import InputField from '../../../components/Inputfield/InputField'
import Sidebar from '../components/Sidebar'
import {FaUserCircle} from 'react-icons/fa'
import './Profile.css'
import useUser from '../../../useUser'
import { useNavigate } from 'react-router-dom'
function Profile() {
  const data=['Name','Email','Phone'];  
  const [loading,setLoading]=useState(false)
  const {user, setUser} = useUser();
  const history=useNavigate ()

  return (
    <>
      <div className="buy-airtime-section">
          <FaUserCircle  className='user-circle'/>
         <h1 className='airtime-header' >Your Profile</h1>
         <div className="buy-airtime-form">            
          <h3 className="profile-p">Name</h3>
         <InputField inputColor='purple-input' label={user['name']  ?? 'name'}
         inputSize={window.innerWidth < 960 ? 'ipn--medium' : 'ipn--wide' }
         readonly={true}
        />
          <h3 className="profile-p">Email</h3>
        <InputField inputColor='purple-input' label={user['email']  ?? 'email'}
         inputSize={window.innerWidth < 960 ? 'ipn--medium' : 'ipn--wide' }
         readonly={true}
        />
          <h3 className="profile-p">Phone</h3>
        <InputField inputColor='purple-input' label={user['phone']  ??'no phone no added'}
         inputSize={window.innerWidth < 960 ? 'ipn--medium' : 'ipn--wide' }
         readonly={true}
        />
        
            <div className="form-row">
              <div className="form-column">
                <h3 className="">Address</h3>
                <InputField inputColor='purple-input' 
                label={user['address']  ??'No address added'}                 
                readonly={true}/>
              </div>
              <div className="form-column">
                  <h3 className="">Password</h3>
                <InputField inputColor='purple-input' label={user['passsword']  ??'********'}  readonly={true}/>
              </div>
            </div>
           <Button   buttonColor='purple' onClick={()=>history('/dashboard/settings')} >
             Edit
           </Button>
         </div>
    </div>
    </>
  )
}

export default Profile