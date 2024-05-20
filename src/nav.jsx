import React, { useState } from 'react';
import {FaTruckMoving} from 'react-icons/fa';
import {AiOutlineHeart} from 'react-icons/ai';
import {BsBagCheck} from 'react-icons/bs';
import {AiOutlineUser} from 'react-icons/ai';
import {CiLogin} from 'react-icons/ci';
import {CiLogout} from 'react-icons/ci';
import {Link} from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import myLogo from "./Assets/img/logo.svg";
import './nav.css';
import { Box, Button, Input , Typography } from '@mui/material';


export default function Nav({searchbtn}) {
  const [search, setSearch] = useState();
  const { loginWithRedirect, logout ,  user, isAuthenticated } = useAuth0();

  return (
    <Box>
        <Box className='free'>
         
            <Box className='icon'>
              <FaTruckMoving />  
            </Box>
          <Typography> FREE Shiping when Shopping upto $1000 </Typography>  
        </Box>
        <Box className="main-header"  >
            <Box className="container"display='flex'  alignItems={{md:'space-between' , xs:'center'}}   flexDirection={{xs:'column', md:'row'}}>
                <Box className="logo" flex={1} >
                    <img src={myLogo} alt="logo" />
                </Box>
                <Box className="search-box" flex={2} mt={{xs:'5px', md:0}}  display='flex' > 
                
                    <Input  type='text' inputComponent='input'  value={search} placeholder='Search Your Product ...' autoComplete='off'  onChange={(e)=> setSearch(e.target.value)} />
                    <Button variant="contained"  onClick={() => searchbtn(search)}>Search</Button>
                </Box>
                <Box className="icon">
                  {
                    isAuthenticated &&
                    (<Box className="account">
                        <Box className="user-icon">
                          <AiOutlineUser />   
                        </Box>
                       <Typography>Hello , {user.name}</Typography>
                    </Box>)

                  }
                    
                    <Box className="second-icon" flex={1} mt={{xs:'12px', md:0}} display='flex' ml={{xs:5 , md:0}} >
                       <Link to="/" className='link'> <AiOutlineHeart /> </Link>
                        <Link to="/cart" className='link'>  <BsBagCheck />  </Link> 
                    </Box>
                  
                </Box>
            </Box>
        </Box>
       
       <Box className="header">
         <Box className="container">
            <Box className="nav">
                <ul>
                  <li>
                    <Link to='/' className='link'>Home</Link>
                  </li>
                  <li>
                    <Link to='/product' className='link'>Product</Link>
                  </li>
                  <li>
                    <Link to='/about' className='link'>About</Link>
                  </li>
                  <li>
                    <Link to='/contact' className='link'>Contact</Link>
                  </li> 
               </ul>
            </Box>
            
            
             <Box className="auth" ml={{xs:10 , sm:0}}>
              {
                isAuthenticated ? 
                <button onClick={() => logout({ logoutParams: { returnTo: "https://fghdr96.github.io/my-app"} })}><CiLogout /></button>  
                :
                 <button onClick={() => {loginWithRedirect()}}><CiLogin /></button>
              }
               
             
             </Box>
         </Box>
       </Box>
    </Box>
  )
}
