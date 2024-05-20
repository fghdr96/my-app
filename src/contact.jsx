import React, { useState } from 'react';
import './contact.css';
import { useAuth0 } from "@auth0/auth0-react";
import { Box, Button, FormControl, Input, TextField , Typography } from '@mui/material';

export default function Contact() {

  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const [users, setUsers] = useState(
    {
      Name: '' , Email: '' , Subject: '' , Message: ''


    }
  )
  let name , value
  const data = (e) =>
  {
    name = e.target.name;
    value = e.target.value;
    setUsers({...users , [name]:value })

  }
  const senddata = async (e) => 
  {
    const{Name , Email , Subject , Message} = users
    e.preventDefault();
    const options = {
      method: 'POST',
      headers: {
        'Content-Type' : 'aplication/json'
      },
      body: JSON.stringify({
        Name , Email , Subject , Message

      })
    }
    const res = await fetch('https://e-commerce-contact-4a2b4-default-rtdb.firebaseio.com/Message.json' , options)
     
    console.log(res);
    if(res)
    {
      alert('Your Message send')
    }
    else{
      alert('An error occured')
    }

  }



  return (
    <>
      <Box className="contact-container" display='flex' width='100%' flexDirection='column' justifyContent='center' alignItems='center'>
         <Box className="contant" display='flex' width='100%' flexDirection='column' justifyContent='center'  alignItems='center'>
          <Typography variant='h2' >#Contact Us</Typography>
            <Box className="form" display='flex' width='100%' flexDirection='column' justifyContent='center'  alignItems='center'>
                 <FormControl method='POST' sx={{width:{xs:'100%' , sm:'70%',md:'50%'}}} display='flex' flexDirection='column' justifyContent='center' alignItems='center' >
                     <Input type="text" name="Name" value={users.Name} placeholder='Enter Your Full Name' required  autoComplete='off' onChange={data} />
                     <Input type="email" name="Email" value={users.Email}  placeholder='Enter Your E-mail' required  autoComplete='off' onChange={data} />
                     <Input type="text" name="Subject" value={users.Subject}  placeholder='Enter Your Subject' required autoComplete='off' onChange={data}  />
                     <TextField name="Message" value={users.Message}  placeholder='Your Message' required autoComplete='off'onChange={data} /> 

                     {
                      isAuthenticated ? 
                      <Button type='submit' onClick={senddata}>Send</Button>
                       :
                       <Button type='submit' onClick={() => loginWithRedirect()}>Login</Button>

                     }
                    

                 </FormControl>
            </Box>
         </Box>
      </Box>
    
    </>
  )
}
