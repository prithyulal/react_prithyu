import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar>
        <Toolbar>
      <Typography>FaceBook</Typography>&nbsp;
      <Button variant='contained' color='success'>
                <Link to={'/'} style={{teaxtDecoration:"none",color:"white"}}>Login</Link>
                </Button> &nbsp;&nbsp;
            <Button variant='contained' color='error'>
            <Link to={'/sign'} style={{teaxtDecoration:"none",color:"white"}}>Signin</Link>
                </Button>&nbsp;&nbsp;
      </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
