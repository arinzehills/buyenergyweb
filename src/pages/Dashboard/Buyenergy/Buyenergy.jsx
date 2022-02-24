import React,{useState} from 'react'
import { Button } from '../../../components/Button/Button'
import DropDownField from '../../../components/Inputfield/DropDownField'
import InputField from '../../../components/Inputfield/InputField'
import DashboardCard from '../components/DashboardCard'
import Details from './Details'
import Summary from './Summary'
import {Step,Stepper,StepLabel,CircularProgress} from '@material-ui/core'
import { red } from '@material-ui/core/colors'
import './Buyenergy.css'
import Confirmation from './Confirmation'
import useStyles from "./styles";

function Buyenergy() {
  const [activeStep,setActiveStep]=useState(0);
  const [electData,setElectData]=useState({})
  const classes = useStyles();
  const steps=['Information', 'Summary']
  const [loading,setLoading]=useState(false);
  

        const nextStep=()=>setActiveStep((prevActiveStep)=>prevActiveStep + 1 )
        const backStep=()=>setActiveStep((prevActiveStep)=>prevActiveStep -  1 )
       
        const next=(data)=>{
          setElectData(data)

          nextStep();
        }
        console.log(electData)
        const Form=()=>activeStep===0
        ? <Details  next={next} />
        :<Summary electData={electData} backStep={backStep} 
          nextStep={nextStep} setLoading={setLoading}
          />
  return (
    <>
      <div className="buy-airtime-section"  >
          <h1 className='airtime-header' >Buy Electricity</h1>
          <Stepper activeStep={activeStep}  >
              {steps.map((step)=>(
                <Step key={step} 
                  // classes={classes.overrides}
                >
                  <StepLabel
                  
                  >{step}</StepLabel>
                </Step>
              ))}
          </Stepper>
          {activeStep ===steps.length ? <Confirmation 
            electData={electData}
            backStep={backStep}
            loading={loading}
          /> : <Form />}
      </div>

    </>
  )
}
const styles = theme => ({
  
  // button: {
  //   marginRight: theme.spacing.unit
  // },
  // instructions: {
  //   marginTop: theme.spacing.unit,
  //   marginBottom: theme.spacing.unit
  // },
  stepIcon: {
    color: "pink"
  }
});
// const styles=()=>{
//   backgroundColor: red;
// }
export default Buyenergy