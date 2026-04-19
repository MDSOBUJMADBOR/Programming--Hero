import React from 'react';

const Cart = ({cart}) => {
    console.log(cart)
    return (
        <div>
            {
                cart.map(c=> <h1>{c.strMeal} <button>X</button></h1>)
            }
        </div>
    );
};

export default Cart;