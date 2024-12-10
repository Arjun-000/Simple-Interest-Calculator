import { useState } from 'react'
import './App.css'
import { TextField, Stack, Button } from '@mui/material';

function App() {
  const [interest, setInterest] = useState(0)
  const [principle, setPrinciple] = useState(0)
  const [years, setYears] = useState(0)
  const [rate, setRate] = useState(0)
  const [invalidPrinciple, setinvalidPrinciple] = useState(false)
  const [invalidRate, setinvalidRate] = useState(false)
  const [invalidYear, setinvalidYear] = useState(false)

  const validateInput=(inputTag)=>{
    console.log(inputTag ,typeof inputTag );
    const {name,value} = inputTag;
    console.log(!!value.match(/^\d+(\.\d+)?$/));
    console.log(!!value.match(/^\d+(\.\d+)?$/));
    if(name =='principle'){
      setPrinciple(value)
      if(!!value.match(/^\d+(\.\d+)?$/)){
        setinvalidPrinciple(false)
      }
      else{
        setinvalidPrinciple(true)
      }
    }else if(name=='rate'){
      setRate(value)
      if(!!value.match(/^\d*.?\d+%?$/)){
        setinvalidRate(false)
      }
      else{
        setinvalidRate(true)
      }
    }
    else{
      setYears(value)
      if(!!value.match(/^\d*$/)){
        setinvalidYear(false)
      }
      else{
        setinvalidYear(true)
      }
    }
 }


 const calculateInterest = (e) => {
  e.preventDefault()
  console.log("Button clicked");
  if (principle && rate && years) {
      setInterest((principle * rate * years) / 100);
  }
  else{
    alert("Fill all details")
  }
  return 0;
}

const resetButton=()=>{
  setPrinciple(0)
  setRate(0)
  setYears(0)
  setinvalidPrinciple(false)
  setinvalidRate(false)
  setinvalidYear(false)
  setInterest(0)

}

  return (
    <>
      <div style={{width: '100%', minHeight: "100vh"} } className='d-flex justify-content-center align-items-center bg-dark'>
      <div className='bg-light p-5 rounded'>
      <h3>Simple Interest Calculator</h3>
      <p>Calculate your Simple Interest Easily ! </p>
      <div className='bg-warning p-5 rounded text-center'>
        <h1> {interest}</h1>
        <p className='fw-bolder'> Total simple interest</p>
      </div>
      <form className='mt-5'>
        <div className="mb-3">
          <TextField name='principle' value={principle || ""} onChange={e=>validateInput(e.target)} className='w-100' id="outlined-principle" label="₹ Principle" variant="outlined" />
        </div>

        {invalidPrinciple && <div className='text-danger fw-bolder mb-3'>
          Invalid Principle Amount  
        </div>}
        <div className="mb-3">
          <TextField name='rate' value={rate || ""} onChange={e=>validateInput(e.target)} className='w-100' id="outlined-rate" label="% Rate" variant="outlined" />
        </div>

        {invalidRate && <div className='text-danger fw-bolder mb-3'>
          Invalid Rate
        </div>}

        <div className="mb-3">
          <TextField name='years' value={years || ""} onChange={e=>validateInput(e.target)} className='w-100' id="outlined-year" label="Time period (in Yr)" variant="outlined" />
        </div>

        {invalidYear && <div className='text-danger fw-bolder mb-3'>
          Invalid Year  
        </div>}

      </form>
      <Stack direction="row" spacing={2} className='mt-2'>
        <Button disabled={invalidPrinciple || invalidRate || invalidYear} onClick={calculateInterest} variant="contained" style={{width:"50%",height:'50px'}} className='bg-dark' type='submit'>Calculate</Button>
        <Button variant="outlined" style={{width:"50%",height:'50px'}} onClick={resetButton} >Reset</Button>
      </Stack>
      </div>
      </div>
    </>
  )
}

export default App
