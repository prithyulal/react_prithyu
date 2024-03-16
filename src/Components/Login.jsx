import { Button, TextField } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div style={{paddingTop:"80px"}}>
      <TextField id="outlined-basic" label="Username" variant="outlined" />
      <br>
      </br>
      <br></br>
      <TextField  id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password" />
          <br>
          </br>
          <br></br>
          <Button variant="outlined">Login</Button>
    </div>
  )
}

export default Login
