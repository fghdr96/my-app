import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './cart.css'
import { Box, Button, Typography } from '@mui/material';

export default function Cart({cart , setCart}) {
    //increase qty
    const incqty = (product) => {
        const exsit = cart.find((x) => {
            return x.id === product.id
        })
        setCart(cart.map((curElm)=>{
            return curElm.id === product.id ? {...exsit , qty: exsit.qty + 1} : curElm
        }))
    }

    //decrease qty
    const decqty = (product) => {
        const exsit = cart.find((x) => {
            return x.id === product.id
        })
        setCart(cart.map((curElm)=>{
            return curElm.id === product.id ? {...exsit , qty: exsit.qty - 1} : curElm
        }))
    }
    //remove cart product 
    const removeproduct = (product) =>{
        const exsit = cart.find((x) => {
            return x.id === product.id
        })
        if(exsit.qty > 0){
            setCart(cart.filter((x)=>{
                return x.id !== product.id
            }))
        }
    }
    //total price
    const Totalprice = cart.reduce((price , item) => price + item.qty * item.price , 0)


  return (
    <>
    
    <Box className="cartcontainer" display='flex' width='100%'  flexDirection='column'  justifyContent='center' alignItems='center'>
        {
            cart.length === 0 &&
            <Box className="emptycart" width='100%'  textAlign='center'  justifyContent='center'>
                <Typography variant='h2' textAlign='center' className="empty">Cart is empty</Typography>
                
              <Box width='100%'  display='flex'  justifyContent='center'  >
                <Link to='/product'   className='emptycartbtn'  >Shop Now</Link>
               </Box>
                

            </Box>
        }
    
        <Box className="contant" display='flex' flexDirection='column' width='100%' >
            {
                cart.map((curElm) => {
                    return(
                        <Box className="cart-item" key={curElm.id} width='100%' display='flex'  flexDirection={{xs:'column' , md:'row'}} justifyContent='center' alignItems='center' >
                            <Box className="img-box" width='100%' height='100%' display='flex' justifyContent='center' >
                                <img src={curElm.Img} alt={curElm.title}  width='250px' height='250px'   />
                            </Box>
                            <Box className="detail" width='100%' display='flex' justifyContent='center' alignItems={{xs:'center' , md:'flex-start'}}>
                             <Box className="info" pr={{xs:'0px' , sm:15}} >
                                 <h4>{curElm.cat}</h4>
                                 <h3>{curElm.title}</h3>
                                 <p> Price : ${curElm.price}</p>
                                 <Box className="qty">
                                    <Button className='incqty' onClick={()=> incqty(curElm)} >+</Button>
                                    <input type="text" value={curElm.qty} />
                                    <Button className='decqty' onClick={()=> decqty(curElm)} >-</Button>

                                 </Box>
                             
                                 <h4 className='subtotal'>Sub Total: ${curElm.price * curElm.qty}</h4>
                             </Box>  
                             <Box className="close"  display='flex'  justifyContent='flex-start'  alignItems='flex-start' pr={{xs:5 , md:0}} >
                                <Button onClick={()=> removeproduct(curElm)} ><AiOutlineCloseCircle /></Button>
                                </Box>
                            </Box>

                          </Box>
                    )
                })
            }
            
        </Box>
         {
           
              cart.length > 0 &&
              <> 
              <Box display='flex' flexDirection='column' width='100%' justifyContent='center' alignItems='center'>
              <Typography variant='h2' className='totalprice'>Total: $ {Totalprice} </Typography>
              <Button className='checkout' variant='contained'  >Checkout</Button>
             </Box> 
              </>
        }
     
    </Box>
    
    
    </>
  )
}
