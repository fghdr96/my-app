import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import './home.css';
import { FiTruck } from 'react-icons/fi';
import { BsCurrencyDollar } from 'react-icons/bs';
import { CiPercent } from 'react-icons/ci';
import { BiHeadphone } from 'react-icons/bi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsEye } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import HomeProduct from './homeproduct'
import { Box, Button, Typography } from '@mui/material';
import pic1 from "./Assets/img/pic1.png";
import smartWatch from "./Assets/img/smart watch.png";
import mobilePhone from "./Assets/img/Mobile Phone.png";
import headPhone from "./Assets/img/headphone.png";
import cpu from "./Assets/img/cpu.png";


export default function Home({ detail ,view, close, setClose, addtocart}) {

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
        <Box className="top-banner" >
            <Box className="container" display='flex' gap={2}  justifyContent='center' alignItems='center' flexDirection={{xs:'column' , md:'row'}}>
                <Box className="detail">
                    <Typography variant='h2' sx={{width:'80%', fontSize:'52px'}} >The Best Note Book Collection 2023</Typography>
                   
                      <Link to='/product' className='link'>Shop Now <BsArrowRight /> </Link>
                </Box>
                <Box className="img-box" sx={{display:'flex',
                  justifyContent:'center'}} >
                  <img src={pic1} alt="slider" />
                </Box>
            </Box>
        </Box>
        <Box className="product-type" >
          <Box className="container" display='flex'  gap={3} alignItems='center' justifyContent={{xs:'center' , md:'space-between'}} flexDirection={{xs:'column' , md:'row'}}>
            <Box className="box" >
              <Box className="img-box" >
                <img src={mobilePhone} alt="mobile" />
              </Box>
              <Box className="detail" sx={{  textAlign:'center', alignItems:'center'}}>
                <Typography >23 products</Typography>
              </Box>
            </Box>

            <Box className="box">
              <Box className="img-box">
                <img src={smartWatch} alt="watch" />
              </Box>
              <Box className="detail" sx={{  textAlign:'center', alignItems:'center'}} >
                <Typography>18 products</Typography>
              </Box>
            </Box>

            <Box className="box">
              <Box className="img-box">
                <img src={headPhone} alt="headphone" />
              </Box>
              <Box className="detail" sx={{  textAlign:'center', alignItems:'center'}} >
                <Typography>52 products</Typography>
              </Box>
            </Box>

            <Box className="box">
              <Box className="img-box">
                <img src={cpu} alt="cpu" />
              </Box>
              <Box className="detail" sx={{  textAlign:'center', alignItems:'center'}} >
                <Typography>63 products</Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box className="about">
          <Box className="container"  display='flex'  gap={2} alignItems='center' justifyContent={{xs:'center' , md:'space-between'}} flexDirection={{xs:'column' , md:'row'}}>
            <Box className="box">
              <Box className="icon">
                 <FiTruck />
              </Box>
              <Box className="detail">
                <h3>Free Shipping</h3>
                <p>Order Above $1000</p>
              </Box>
            </Box>

            <Box className="box">
              <Box className="icon">
                 <BsCurrencyDollar />
              </Box>
              <Box className="detail">
                <h3>Return & Refund</h3>
                <p>Money Back Gauranty</p>
              </Box>
            </Box>

            <Box className="box">
              <Box className="icon">
                 <CiPercent />
              </Box>
              <Box className="detail">
                <h3>Member Discount </h3>
                <p>On Every Order</p>
              </Box>
            </Box>
            <Box className="box">
              <Box className="icon">
                 <BiHeadphone />
              </Box>
              <Box className="detail">
                <h3>Customer Support </h3>
                <p> Every Time Call Support</p>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box className="product">
          <h2>Top Products</h2>
          <Box className="container"  display='flex' flexDirection={{xs:'column' , sm:'row'}} alignItems={{xs:'center' , sm:'normal'}}>
            {
              HomeProduct.map((curElm)=>{
                return(
                  <>
                  <Box className="box" key={curElm.id}>
                    <Box className="img-box">
                      <img src={curElm.Img} alt={curElm.title} />
                      <Box className="icon">
                        <li  onClick={() => addtocart(curElm)}><AiOutlineShoppingCart /></li>
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

          <Box className="banner">
             <Box className="container" display='flex' gap={2}  justifyContent='center' alignItems='center' flexDirection={{xs:'column' , md:'row'}} >
                <Box className="detail">
                   <Typography variant='h4'>LATEST TECHNOLOGY ADDED</Typography>
                   <Typography variant='h3'>Apple iPad 10.2 9th Gen  - 2021</Typography>
                   <Typography>  $ 986 </Typography>
                   <Link to='/product' className='link' >Shop Now  <BsArrowRight /> </Link>
                 </Box>
                 <Box className="img-box" sx={{display:'flex',
                  justifyContent:'center'}}>
                    <img src={pic1} alt="sliderimg" width='100%' />
                  </Box>
              </Box>              
          </Box>
    </>
  )
}
