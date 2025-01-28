import React, { useContext, useEffect, useState } from 'react'
import "./FoodDisplay.css"
import { StoreContext } from '../../Context/StoreContext'
import { assets } from '../../assets/assets';
import FoodItem from '../FoodItem/FoodItem';
import axios from 'axios';

const FoodDisplay = ({category}) => {
  const[foodList,setFoodList]=useState([]);
  const[loading,setLoading]=useState(true);

  //  const {food_list}=useContext(StoreContext);
    // if (!food_list) {
    //   return <div>Loading...</div>;
    // }

    useEffect(()=>{
      const fetchFoodItems=async()=>{
        try{
          const response= await axios.get('http://localhost:8080/api/food-items');
          console.log(response);
          setFoodList(response.data);
          setLoading(false);
        }
        catch(error){
          console.log("Error fetching food items: ", error);
          setLoading(false);
        }
      };
      fetchFoodItems();

    },[])
    if(loading){
      return <div>Loading...</div>; 
    }
  return (
    <div className='food-display' id="food-display">
        <h2>Top dishes near you</h2>
        <div className="food-display-list">
            {/* {food_list.map((item,index)=>{
              if(category==="All" || category===item.category){

                return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
              }
                

            })} */}

            {
              foodList.map((item,index)=>{
                if (category === "All" || category === item.category) {
                  return (
                      <FoodItem
                          key={index}
                          id={item.id}
                          name={item.name}
                          description={item.description}
                          price={item.price}
                          image={item.imgURL}
                      />
                  );
              }
              return null;
              })
            }
        </div>
      
    </div>
  )
}

export default FoodDisplay