import React, { useContext, useState } from 'react'
import "./Navbar.css"
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

function Navbar({setShowLogin}) {

  const [menu,setMenu]=useState("Home");
  const {cartItems}=useContext(StoreContext);

  const cartItemCount = Object.values(cartItems).reduce((acc, itemCount) => acc + itemCount, 0);
  return (
    <div className='navbar'>
     <Link to='/'> <img src={assets.logo} alt="" className='logo'/></Link>
      <ul className='navbar-menu'>
        <Link to='/'>
        <li onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</li>
        </Link>
       
        <Link to='/cart'>
        <li onClick={()=>setMenu("Cart")} className={menu==="Cart"?"active":""}>Cart</li>
        </Link>
       
        <li onClick={()=>setMenu("My order")}  className={menu==="My order"?"active":""}>My Orders</li>
        <li onClick={()=>setMenu("Contact us")} className={menu==="Contact us"?"active":""}>Contact us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt=""/>
        <div className="navbar-basket-icon">
           <Link to='/cart'> <img src={assets.basket_icon} alt=""/></Link>
           {cartItemCount > 0 && <div className="dot"></div>}
        </div>
        <button onClick={()=>setShowLogin(true)} >Sign in</button>
      </div>
    </div>
  )
}

export default Navbar