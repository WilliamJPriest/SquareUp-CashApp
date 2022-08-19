import React, {useState,useEffect} from "react";
import '../styles/FoodCart.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faTrashCan,faHeart } from "@fortawesome/free-solid-svg-icons";
import { faApplePay,faGooglePay } from "@fortawesome/free-brands-svg-icons";

function FoodCart (props){

   

      return (
        <div className="cart-container">
      <div className="food-card">
      <h5 className="card-title">My Orders</h5>
      {
      props.cart.map(() =>{
                <div className="product-card">
<div className="image"><img src="/food.jpg" alt="" /></div>
<div className="food-details"> 
<ul>
  {console.log(props.cart)}
      <li>{props.counter} BBq Chicken Wings </li>
      <li>2X Extra Spicy Sausage  </li>
    </ul> 
    <p onClick={props.handleAddToCart}><FontAwesomeIcon className="remove" icon={faTrashCan}/> Remove</p>
      <p onClick={props.handleLike}><FontAwesomeIcon className="like"  icon={faHeart}/> Move to Wishlist</p>
  </div>
  <div className="selection">
    <select name="selector" id="quantity">
      <option value="1">1</option>
      <option value="1">2</option>
      <option value="1">3</option>
      <option value="1">4</option>
      <option value="1">5</option>
      <option value="1">6</option>

    </select>
    <p className="apart lone"><FontAwesomeIcon className="amount-icon" icon={faDollarSign}/> 43</p>
  </div>
  </div>

      })
      }
  </div>
  </div>
  )
}
export default FoodCart;