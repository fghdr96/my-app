import Nav from './nav'
import {BrowserRouter} from 'react-router-dom'
import Rout from './rout';
import Footer from './footer';
import { useState } from 'react';
import Productdetail from './productDetails';

export default function App() {
  //add to cart
  const [cart, setCart] = useState([]);
  //produc detail
  const [close, setClose] = useState(false);
  const [detail, setDetail] = useState([]);
  //filter product
  const [product, setProduct] = useState(Productdetail);
  const searchBtn = (product) => 
  {
    const change = Productdetail.filter((x) => 
    {
      return x.cat === product

    })
    setProduct(change)

  }; //
  //produc detail
  const view = (product) =>{
    setDetail([{...product}])
    setClose(true)

  };
  //add to cart

  const addtocart =(product) => {
    const exsit = cart.find((x) => {
      return x.id === product.id
    })
    if(exsit){
      alert("This Product is already added to cart")
    }
   else{
    setCart([...cart, {...product , qty:1}])
    alert("This Product is added to cart")
   }

  }


  
  return (
    <div>
  <BrowserRouter  basename={process.env.PUBLIC_URL}>
  <Nav searchbtn ={searchBtn} />
  <Rout product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} cart={cart} setCart={setCart} addtocart={addtocart} />
  <Footer />
  </BrowserRouter>
  
    </div>
  )
}
  
   