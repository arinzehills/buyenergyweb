import React from 'react'
import { Button } from '../../../components/Button/Button'
import InputField from '../../../components/Inputfield/InputField'
import DashboardCard from '../components/DashboardCard'

function Buyenergy() {
 
  return (
    <>
      <div className="buy-airtime-section">
         <h1 className='airtime-header' >Buy Electricity</h1>
         <div className="buy-airtime-form">
         <InputField inputColor='purple-input' label='Select biller'
         inputSize={window.innerWidth < 960 ? 'ipn--medium' : 'ipn--wide' }
         />
            <div className="form-row">
             <InputField inputColor='purple-input' label='Meter number'/>
             <InputField label='Meter type' inputColor='purple-input'/>
           </div>
           <InputField inputColor='purple-input' label='Amount'
          inputSize={window.innerWidth < 960 ? 'ipn--medium' : 'ipn--wide' }/>
           <Button buttonColor='purple'  >
             Continue
           </Button>
         </div>
    </div>
    </>
  )
}

export default Buyenergy