import React,{useState} from 'react'
import { Button } from '../../../components/Button/Button'
import InputField from '../../../components/Inputfield/InputField'
import Modal from '../../../components/Modal/Modal';
import './Buyairtime.css'
function Buyairtime() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
    <div className="buy-airtime-section">
         <h1 className='airtime-header' >More</h1>
         <div className="buy-airtime-form">
         {/* <InputField inputColor='purple-input' label='Select biller'
          inputSize={window.innerWidth < 960 ? 'ipn--medium' : 'ipn--wide' }
         /> */}
            <div className="form-row">
             <InputField inputColor='purple-input' label=''/>
             {/* <InputField label='Amount' inputColor='purple-input'/> */}
           </div>
           <Button buttonColor='purple'
            onClick={() => {
              setModalOpen(true);
            }}
           buttonSize='btn--large' >
             Gas Units
             
           </Button>
           {modalOpen && <Modal setOpenModal={setModalOpen}  />}
           <Button 
           onClick={() => {
            setModalOpen(true);
          }}
           buttonColor='orange' buttonSize='btn--large' >
             EV Charging
           </Button>
         </div>
    </div>
    </>
  )
}

export default Buyairtime