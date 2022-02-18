import React from 'react'
import { Button } from '../../../components/Button/Button'
import InputField from '../../../components/Inputfield/InputField'
import Sidebar from '../components/Sidebar'
import {FaUserCircle} from 'react-icons/fa'
import './Profile.css'
function Profile() {
  const data=['Name','Email','Phone'];
  return (
    <>
      <div className="buy-airtime-section">
          <FaUserCircle  className='user-circle'/>
         <h1 className='airtime-header' >Your Profile</h1>
         <div className="buy-airtime-form">            
          <h3 className="profile-p">Name</h3>
         <InputField inputColor='purple-input' label='name'
         inputSize={window.innerWidth < 960 ? 'ipn--medium' : 'ipn--wide' }
         readonly={true}
        />
          <h3 className="profile-p">Email</h3>
        <InputField inputColor='purple-input' label='email'
         inputSize={window.innerWidth < 960 ? 'ipn--medium' : 'ipn--wide' }
         readonly={true}
        />
          <h3 className="profile-p">Phone</h3>
        <InputField inputColor='purple-input' label='phone'
         inputSize={window.innerWidth < 960 ? 'ipn--medium' : 'ipn--wide' }
         readonly={true}
        />
        
            <div className="form-row">
              <div className="form-column">
                <h3 className="">Address</h3>
                <InputField inputColor='purple-input' label='Address'  readonly={true}/>
              </div>
              <div className="form-column">
                  <h3 className="">Password</h3>
                <InputField inputColor='purple-input' label='Address'  readonly={true}/>
              </div>
            </div>
           <Button   buttonColor='purple'  >
             Edit
           </Button>
         </div>
    </div>
    </>
  )
}

export default Profile