import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasics = () => {
    // var name  = "Prithyulal"
    var [name,SetName]=useState("class")
    var[val,setval]= useState()

    const Changename=()=>{
          console.log("Clicked")
          SetName(val)
    }
    const inputHandler=(e)=>{
        console.log(e.target.value)
        setval(e.traget.value)
    }
      return (
    <div style = {{paddingTop:"80px"}} >
   < Typography variant='h4'>Welcome:{name} </Typography>
   <TextField varient='outlined'label='Enter the  text ' onchange={inputHandler}/><br/>
    <Button variant='Contained' color='error'onClick={Changename}>Change</Button> 
    </div>
  )
}

export default Statebasics
