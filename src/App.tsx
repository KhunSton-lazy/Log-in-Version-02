import React, {useState, useEffect}     from 'react';
import Box            from '@mui/material/Box';
import TextField      from '@mui/material/TextField';
import Checkbox       from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import "./styles/styles.css"



function App() {

  const [phoneNumber, setPhoneNumber] = useState<number>()
  const [password, setPhonePassword] = useState<string>("")
  

  const handlePhoneNumber = (event: { target: { value: any; }; }) => {
    const updatePhoneNumber = event.target.value;
    setPhoneNumber(updatePhoneNumber)
  }

  const handlePassword = (event: { target: { value: any; }; }) => {
    const updatePassword = event.target.value;
    setPhonePassword(updatePassword)
  }
  
  return (
    <div className="container">   
     <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '50ch'},
      }}
      noValidate
      autoComplete="off" 
    > 
    <div className="content">
      
      <div>
        <Typography variant="h4">
          <b>Log In</b>
        </Typography>
        <Typography variant="body1">
          Doesn't have an account yet? <span style={{color: "#59BBE5"}}>Sign up</span>
        </Typography>
      </div>
     
      <div className="phoneNumber">
      <Typography variant="subtitle1">
        Phone number
      </Typography>
      <TextField
          required
          id="outlined-required"
          label="+855"
          value={phoneNumber}
          onChange={handlePhoneNumber}
        />
        <Typography variant="subtitle1">
          {phoneNumber}
        </Typography>
      </div>
      
      <div className="password">
        <div className="forgotPassword">
          <Typography variant="subtitle1">
          Password
          </Typography>
          <Typography variant="subtitle1" style={{color: "#59BBE5"}}>
          Forgot Password?
          </Typography>
        </div>

      <TextField
          required
          id="outlined-required"
          type="password"
          value={password}
          onChange={handlePassword}
        />
        <Typography>
          {password}
        </Typography>
        <br />
        <div className="rememberMe">
          <Checkbox />
          <Typography variant="subtitle1">
          Remember me
        </Typography>
        </div>

        <Button style={{backgroundColor: "#59BBE5"}} className="button" variant="contained">Log in</Button>
      </div>
      </div>
     </Box>
     
     </div>
  );
}

export default App;