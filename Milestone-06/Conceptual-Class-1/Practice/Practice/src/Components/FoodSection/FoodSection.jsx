import React, { use, useState } from 'react';
import SingleFood from '../SingleFood/SingleFood';
import './FoodSection.css'
import Cart from '../Cart/Cart';
import { ToastContainer ,toast } from 'react-toastify';
const FoodSection = ({foodDataRes}) => {
         
const data = use(foodDataRes);
const foods = data.meals;
// console.log(foods);
const [cart,setCart] = useState([])
const addToCart = (foodData) => {
     setCart([...cart,foodData])

}

const handleOrder = () => {
      setCart([]);
      toast.success("You order Success")
}

          return (
                    <div className='foods-container-parent'>
                              <div className='foods-container'>
                                        {
                                        foods.map((food) => <SingleFood addToCart={addToCart} food={food}></SingleFood>) 
                                        }
                              </div>
                              <div className='Orderbtn'>
                                    <h1>Order Cart</h1>
                                    <Cart cart={cart}></Cart>
                                    <button className='Order' onClick={handleOrder}>Order Success</button>    
                              <ToastContainer />
                              </div>
                    </div>
          );
};

export default FoodSection;


