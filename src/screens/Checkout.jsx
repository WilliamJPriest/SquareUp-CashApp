import React, {useState,useEffect} from "react";
import {Link} from "react-router-dom"
import {useSelector} from "react-redux"
import '../styles/Checkout.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faDollarSign } from "@fortawesome/free-solid-svg-icons";

function Checkout (){
  const cart = useSelector(state => state.cartList)

      return (
        <div className='container'>
      <div className="card" item key={1}>
        <div className="overlay">
  {/* <div className="card-body">
  </div>  */}
  <div className="card-header">
  <div className="card-title-group">
  <h5 className="card-title">Check-Out Order</h5>
  </div>
  </div>
  <div className="ordered">
  <div className="surround">
    <div className="orders">
    <ul>
      <table>
        <tr><th>Items</th>
        <th>Price<FontAwesomeIcon className=".pay-icon" icon={faDollarSign}></FontAwesomeIcon></th></tr>
        <tr class="item-list"><td class="item">BBq Chicken Wings</td><td class="price">40</td></tr>
        <tr class="item-list"><td class="item">2X Extra Spicy Sausage</td><td class="price">3</td></tr>
      </table>
    </ul> 
    </div>
    </div>
    <div id="head3"><h3>Total<span className="apart">43</span></h3></div>
    </div>
    <div id="billings">
    <div className="sumed"> 
    <h3 id="addr-label">Shipping <br/>Address</h3><span id="address">Suite 56,Apt 2A, Maddison Avenue Connecticut</span>
    </div>
    <button className="pButton"><Link to="/payout">
     Checkout Cart <FontAwesomeIcon className=".pay-icon" icon={faCartShopping}></FontAwesomeIcon></Link>
  </button>
    </div>
  </div>
  
  </div>
  </div>
  )
}
export default Checkout;