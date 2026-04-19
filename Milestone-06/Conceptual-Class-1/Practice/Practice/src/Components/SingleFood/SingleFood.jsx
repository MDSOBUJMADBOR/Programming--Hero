import React from 'react';
import './SingleFood.css'

const SingleFood = ({food,addToCart}) => {
          console.log();
          return (
                    <div className='cart'>
                       <img src={food.strMealThumb} alt="" />
                       <h3>Name : {food.strMeal}</h3><br />
                       <button onClick={() => addToCart(food)} className='add-to-cart'>Add to cart</button>

                    </div>
          );
};

export default SingleFood;
