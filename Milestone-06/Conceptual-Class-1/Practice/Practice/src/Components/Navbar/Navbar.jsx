import React from 'react';
import  './Navbar.css'
import Img from '../../assets/food.jpg'

const Navbar = () => {
          return (
                    <nav className='nav-container'>
                   
                     <div className='nav-left'>
                              <img src={Img} alt="" />
                              <p>Meal hub</p>
                     </div>  

                     <div className='nav-right'>
                              <ul>
                                        <li><a href="">Home</a></li>
                                        <li><a href="">About</a></li>
                                        <li><a href="">Contact</a></li>
                                        <li><a href="">Blogs</a></li>
                              </ul>
                     </div>   

                    </nav>
          );
};

export default Navbar;



