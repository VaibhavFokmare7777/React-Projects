import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext=createContext(null);

export const StoreContextProvider=(props)=>{
    
    const[cartItems,setCartItems]=useState({});

    //Add to cart Functionality

    const addToCart=(itemId)=>{

        //condition for Item is not present in Cart
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }

    }

    //Remove item from cart

    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const contextValue={

        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart

    }
    useEffect(()=>{
        console.log(cartItems)

    },[cartItems])

    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}