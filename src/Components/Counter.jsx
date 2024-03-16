import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var [Count,setCount] = useState(0)
    const Add=()=>{
        setCount(Count+1)
    }
    const Subtract=()=>{
        if (Count>0) {
        setCount(Count-1)   
        }
    }
  return (
    <div style={{paddingTop: "80PX"}}>
        <Typography variant='h3'>Counter value :{Count}</Typography>
     <Button variant='contained' color='success' onClick={Add}>+</Button>&nbsp;
     <Button variant='contained' Color='error' onClick={Subtract}>-</Button>&nbsp;
    </div>
  )
}

export default Counter
