import React from 'react'
import { Button } from '../../../components/Button/Button'
import InputField from '../../../components/Inputfield/InputField'
import './Buyairtime.css'
function Buyairtime() {
  return (
    <>
    <div className="buy-airtime-section">
         <h1 className='airtime-header' >Buy Airtime</h1>
         <div className="buy-airtime-form">
         <InputField inputColor='purple-input' label='Select biller'
          inputSize={window.innerWidth < 960 ? 'ipn--medium' : 'ipn--wide' }
         />
            <div className="form-row">
             <InputField inputColor='purple-input' label='Phone number'/>
             <InputField label='Amount' inputColor='purple-input'/>
           </div>
           <Button buttonColor='purple'  >
             Continue
           </Button>
         </div>
    </div>
    </>
  )
}

export default Buyairtime