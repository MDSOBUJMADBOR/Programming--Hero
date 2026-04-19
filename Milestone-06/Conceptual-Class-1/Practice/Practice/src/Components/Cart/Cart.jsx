
import React from 'react';

const Cart = ({cart}) => {
          // console.log(cart);
          return (
                    <div>
                              {
                              cart.map(c => (
                                        <ul type="dise">
                                                  <li>{c.strMeal}</li>
                                        </ul>
                              ))
                              }
                    </div>
          );
};

export default Cart;

