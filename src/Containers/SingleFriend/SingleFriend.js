import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './SingleFriend.css'
const SingleFriend = ({handleClicked, friend}) => {
  
  const [Firend, setFriend] = useState({})

    const {img, name, salary, Occuption, Country, Age} = friend;
    const element = <FontAwesomeIcon icon={faShoppingCart}/>

       
    return (
        
        <>
          <div className="container col-4 px-5 text-center friend-cart">
              <div className="">
                <img className="img" src= {img} alt="" />
                <h5>Name: {name}</h5>
                <h6>Occuption: {Occuption}</h6>
                <h3>Age: {Age}</h3>
                <h4>Country: {Country}</h4>
                <h4>salary: ${salary}</h4>
                <p><i class="fab fa-facebook-square"></i></p>
                <button onClick={()=> handleClicked(friend)}  className="btn-style">{element} Add to cart</button>
              </div>
          </div>
        </>
 );
};
   
export default SingleFriend;

