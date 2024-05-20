import React from 'react';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import myLogo from "./Assets/img/logo.svg";
import { Box, IconButton, Stack, Typography, styled } from '@mui/material';


const SocialBox =styled(Box)({
    display :'flex',
    gap: 10,
   
  });
export default function Footer() {
  return (
    <>
     <Box sx={{background:"#e3edf6" , color:'#010f1c', fontFamily:'sans-serif'}}>
        <Stack direction={{xs:'column', md:'row'}} p={7}>
            <Box flex={1} alignItems='center' justifyContent='center'>
                <Box>
                    <img src={myLogo} alt="logo" />
                </Box>
                <Box>
                    <Typography>We are a team of designers and developers that create high quality websites</Typography>
                    <SocialBox sx={{display:{ xs:'block'} , alignItems:'center'}}>
                    <IconButton>
                     <Facebook />
                    </IconButton>
                    <IconButton>
                        <Instagram />
                    </IconButton>
                    <IconButton>
                         <Twitter />
                    </IconButton>
                   
                 </SocialBox>
                </Box>
            </Box>

            <Box flex={1} >
                <Typography variant='h4' align='center'>My Account</Typography>
               
                    <Typography align='center'>Account</Typography>
                    <Typography align='center'>Order</Typography>
                    <Typography align='center'>Cart</Typography>
                    <Typography align='center'>Shipping</Typography>
                    <Typography align='center'>Return</Typography>                   
                
            </Box>

            <Box flex={1} >
                <Typography variant='h4' align='center'>Pages</Typography>
                
                    <Typography  align='center'>Home</Typography>
                    <Typography  align='center'>About</Typography>
                    <Typography  align='center'>Contact</Typography>
                    <Typography  align='center'>Terms & Conditions</Typography>
                
            </Box>
        </Stack>
     </Box>
     
    
    </>
  )
}
