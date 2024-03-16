import { Button, TextField } from '@mui/material'
import React from 'react'

const Signin = () => {
  return (
    <div style={{paddingTop:"80px"}}>
      <TextField id="outlined-basic" label="Username" variant="outlined" />
      <br>
      </br>
      <TextField id="outlined-basic" label="MOb no:" variant="outlined" />
      <br>
      </br>
      <TextField   id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password" />
          <br>
          </br>
          <br></br>
          <Button variant="outlined">Signin</Button>
    </div>
  )
}

export default Signin
