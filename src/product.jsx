import React from 'react';
import Productdetail from './productDetails';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsEye } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useAuth0 } from "@auth0/auth0-react";
import './product.css'
import { Box, Button, Typography } from '@mui/material';
//import { useState } from 'react';


export default function Product({product , setProduct,detail, view, close, setClose, addtocart}) {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const filtterProduct = (product)=>{
    const update = Productdetail.filter((x) =>
    {
      return x.cat === product
    })
    setProduct(update);    
  };
 const AllProducts = () =>
 {
   setProduct(Productdetail) 
 }

  return (
     <> 
    { close ?
      
      <Box className="product-detail"  maxWidth='100% ' height='100%' display='flex'flexDirection='row' sx={{pr:{xs:5, sm:9,md:25}}} justifyContent={{xs:'center' ,l:'normal'}} alignItems={{xs:'center' , l:'normal'}} >
      <Box className="container" maxWidth='100% 'height='1000px' sx={{bottom:{xs:'auto' }}} mt='20px'  flexDirection={{xs:'column' , md:'row'}}    >
        <Box sx={{pr:{xs:4}, }}>
          <Button  sx={{pb:2}} onClick={() => setClose(false)} className='closebtn'><AiOutlineCloseCircle /></Button>
        </Box>
        
        {
          detail.map((curElm) => {
            return(
              <Box className="productbox" display='flex' height='100%'  flexDirection={{xs:'column' , md:'row'}} justifyContent='center' alignItems='center'>
                <Box className="img-box" sx={{display:'flex',
                  justifyContent:'center' ,width:'100%'}}>
                  <img src={curElm.Img} alt={curElm.title} />
                </Box>
                <Box className="detail" height="100%">
                  <Typography variant='h4'>{curElm.cat}</Typography>
                  <Typography variant={{xs:'h4' , md:'h2'}} sx={{marginTop: '20px',fontSize: {xs:'14px',sm:'18px' , md:'32px'}, color:' #010f1c', textTransform: 'capitalize', letterSpacing: '1px',display:'block'}} >{curElm.title}</Typography >
                  
                  <Typography variant={{xs:'h5' , sm:'h3'}} sx={{marginTop: '20px',fontSize: {xs:'14px',sm:'18px' , md:'32px'}, color:' #010f1c', textTransform: 'capitalize',letterSpacing: '1px', fontWeight:'bold'}} >${curElm.price}</Typography>
                  <Box sx={{display:{xs:'flex'} , width:{xs:'250px'} , height:{xs:"100px"}, pb:2}}>
                    <Button onClick={() => addtocart(curElm)}>Add to cart</Button>
                  </Box>
                  
                </Box>
              </Box>
            )
          })
        }
        <Box className="productbox"></Box>
      </Box>
     </Box> : null
   }    
   <Box className="products">
    <Typography variant='h2'  sx={{textAlign:{xs:'center' , sm:'left'}}} ># Product</Typography> 
    <Typography sx={{textAlign:{xs:'center' , sm:'left'}}} >Home . products</Typography> 
     <Box className="container" display='flex' flexDirection={{xs:'column' , sm:'row'}} alignItems={{xs:'center' , sm:'normal'}}>
      <Box className="filter">
        <Box className="categories"  >
          <Typography variant='h3'>Categories</Typography>
          <ul>
            <li onClick={() => AllProducts ()}> All Products</li>
            <li onClick={() => filtterProduct ("Tablet")}>Tablet</li>
            <li onClick={() => filtterProduct ("Smart Watch")}>Smart Watch</li>
            <li onClick={() => filtterProduct ("Headphone")}>Headphone</li>
            <li onClick={() => filtterProduct ("Camera")}>Camera</li>
            <li onClick={() => filtterProduct ("Gaming")}>Gaming</li>
          </ul>
        </Box>
      </Box>

      <Box className="product-box">
        <Box className="contant">
           {
           product.map((curElm) =>{

            return(
              <>
                  <Box className="box" key={curElm.id}>
                    <Box className="img-box">
                      <img src={curElm.Img} alt={curElm.title} />
                      <Box className="icon">
                        {
                          isAuthenticated ? 
                          <li onClick={() => addtocart(curElm)} ><AiOutlineShoppingCart /></li>
                          :
                          <li onClick={() => loginWithRedirect()} ><AiOutlineShoppingCart /></li>

                        }
                        
                       <li onClick={()=>view(curElm)}><BsEye /></li> 
                        <li><AiOutlineHeart /></li>               
                      </Box>
                    </Box>
                    <Box className="detail">
                      <p>{curElm.cat}</p>
                      <h3>{curElm.title}</h3>
                      <h4> ${curElm.price} </h4>
                    </Box>
                  </Box> 
              </>

            )

           })
           }
        </Box>
      </Box>
    </Box>
   </Box>
    
    
    </>
  )
}
