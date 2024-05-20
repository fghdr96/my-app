import { Box, Stack, Typography } from '@mui/material'
import React from 'react';
import './about.css';
import { LocalShipping, Star, SupportAgent } from '@mui/icons-material';

import pic2 from "./Assets/img/pic2.jpg";
import client1 from "./Assets/img/client-1.png";
import client2 from "./Assets/img/client-2.png";
import client3 from "./Assets/img/client-3.png";
import client4 from "./Assets/img/client-4.png"
import client5 from "./Assets/img/client-5.png";
import client6 from "./Assets/img/client-6.png";
import client7 from "./Assets/img/client-7.png";
import client8 from "./Assets/img/client-8.png";



export default function About() {
  return (
    <>
      <Box  className="about-container" display='flex' width='100%' flexDirection={{xs:'column' , md:'row'}} justifyContent='center' alignItems='center'>
        <Box className="contant" display='flex' width='100%' flexDirection='column' justifyContent='center'  alignItems='center'>
            <Typography variant='h4' sx={{textTransform:'uppercase',fontSize:'32px',color: '#010f1c',fontWeight:200}}>
              #About Us
            </Typography>
            <Box className="img-box" sx={{display:'flex',justifyContent:'center'}} pt={2} >
                  
                  <img src={pic2} alt="phone" width='80%' height='60%' />
            </Box>


     <Box display='flex' justifyContent='flex-start' alignItems='flex-start' width='80%'>
        <Stack direction={{xs:'column' , md:'row'}} spacing={{xs:1 , sm:2 , md:5}} mt={5}>
          <Box width='100%' class="service-block-inner">
           <Typography variant='h5' sx={{textTransform:'capitalize',fontSize:'30px',fontWeight:400}} >Who We Are ?</Typography>
          <Typography sx={{fontWeight:100}}>Contextual advertising programs sometimes have strict policies that need to be adhered too.Let’s take Google as an example.</Typography>
          </Box>
         <Box width='100%' class="service-block-inner" >
          <Typography variant='h5'sx={{textTransform:'capitalize',fontSize:'30px',fontWeight:400}} >What We Do ?</Typography>
          <Typography sx={{fontWeight:100}}>In this digital generation where information can be easily obtained within seconds, business   cards still have retained their importance.</Typography>
          </Box>
         <Box width='100%' class="service-block-inner" >
          <Typography  variant='h5' sx={{textTransform:'capitalize',fontSize:'30px',fontWeight:400}} >Why Choose Us ?</Typography>
          <Typography sx={{fontWeight:100}} >A two or three storey house is the ideal way to maximise the piece of earth on which our home sits, but for older or infirm people</Typography>
          </Box>
       </Stack>
     </Box>

     <Box display='flex' justifyContent='flex-start' alignItems='flex-start' width='100%' pt={12} >
        <Stack direction={{xs:'column' , md:'row'}} spacing={{xs:1 , sm:2 , md:5}} mt={5}>
          <Box width='100%'>
           <Typography variant='h5' sx={{textTransform:'capitalize',fontSize:'30px',fontWeight:400}}> what can we do for you?</Typography>
          <Typography sx={{fontWeight:100}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis tenetur laborum impedit adipisci laboriosam voluptatem maxime, officiis exercitationem fugiat sequi blanditiis sit est modi cum. In quidem labore alias nulla.</Typography>
          </Box>
         <Box width='100%' bgcolor={'#fff'} textAlign='center' justifyContent='center' alignItems='center' >
          <LocalShipping fontSize='large' color="primary" />
          <Typography variant='h5'sx={{textTransform:'capitalize',fontSize:'30px',fontWeight:400}} >fast delivery </Typography>
          <Typography sx={{fontWeight:100}}>In this digital generation where information can be easily obtained within seconds, business   cards still have retained their importance.</Typography>
          </Box>
         <Box width='100%' bgcolor={'#fff'} textAlign='center' justifyContent='center' alignItems='center' >
          <SupportAgent fontSize='large' color="primary" />
          <Typography  variant='h5' sx={{textTransform:'capitalize',fontSize:'30px',fontWeight:400}} >support 24/7</Typography>
          <Typography sx={{fontWeight:100}} >A two or three storey house is the ideal way to maximise the piece of earth on which our home sits, but for older or infirm people</Typography>
          </Box>
          <Box width='100%' bgcolor={'#fff'} textAlign='center' justifyContent='center' alignItems='center' >
          <Star fontSize='large' color="primary" />
          <Typography  variant='h5' sx={{textTransform:'capitalize',fontSize:'30px',fontWeight:400}} >Best quality</Typography>
          <Typography sx={{fontWeight:100}} >A two or three storey house is the ideal way to maximise the piece of earth on which our home sits, but for older or infirm people</Typography>
          </Box>
       </Stack>
     </Box>

       <Box pt={10} pb={8} >      
        <Box >
          <Typography variant='h3' color="primary" textAlign='center' >Partner</Typography>
          <Typography variant='h5' textAlign='center'>Clients</Typography>
        </Box>
        <Stack direction={{xs:'column' , md:'row'}} spacing={{xs:1 , sm:2 , md:5}} mt={5}>
             <Box className="img-box"  display='flex' flexDirection={{xs:'column' , md:'row'}} width='100%' gap={8} justifyContent='center' alignItems='center' pt={2} >
                  
                  <img src={client1} alt="phone" width='100px' height='100px' />
                  <img src={client2} alt="phone" width='100px' height='100px'  />
                  <img src={client3} alt="phone" width='100px' height='100px'  />
                  <img src={client4} alt="phone" width='100px' height='100px' />
                  <img src={client5} alt="phone" width='100px' height='100px'  />
                  <img src={client6} alt="phone" width='100px' height='100px'  />
                  <img src={client7} alt="phone"  width='100px' height='100px' />
                  <img src={client8} alt="phone" width='100px' height='100px' />    
            </Box>
        </Stack>
        </Box>



       </Box>
     </Box>
    
    
    </>
  )
}
