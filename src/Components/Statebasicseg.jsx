import { Button, Typography, useScrollTrigger } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Statebasicseg = () => {
    var[name,SetName]= useState()
    const ChangeHname =()=>{
        SetName("Home")

    }
    const ChangeCname =()=>{
        SetName("Contact")

    }
    const ChangeGname =()=>{
        SetName("Gallery")
    }
 useEffect(()=>{
    ChangeCname()
 },[])
  return (
    <div style = {{paddingTop:"80px"}} >
    < Typography variant='h4'>
     Welcome to {name} page</Typography>
     <Button variant='contained' color='error' onClick={ChangeHname}>Home</Button> &nbsp;
     <Button variant='contained' color='success' onClick={ChangeCname}>Contact</Button> &nbsp;
     <Button variant='contained' color='warning' onClick={ChangeGname}>Gallery</Button> &nbsp;
     </div>
  )
}

export default Statebasicseg
