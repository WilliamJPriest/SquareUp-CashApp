import React, {useState,useEffect} from "react";
import './styles/Payout.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApplePay,faGooglePay } from "@fortawesome/free-brands-svg-icons";
import { faCartShopping, faDollarSign } from "@fortawesome/free-solid-svg-icons";

class Payout extends React.Component{
  constructor(props) {
    super(props)
    this.state ={
      counter:0,
    }
    
    this.handleLike = this.handleLike.bind(this);
    }
    handleLike(){
      this.setState({counter: this.state.counter+1})
    }
   
    render() {
      return (
      <div className="payout-container" item key={1}>
       <div className="payout-card">
         <div className="instruction">
  <p >Please select payment Method below to automatically proceed</p>
  </div>
  <div className="payment-div">
    <h2>We Accept</h2>
    <ul>
      <li><button><FontAwesomeIcon className=".pay-icon" icon={faApplePay}></FontAwesomeIcon></button></li>
      <li><button type="submit" id="mid"><FontAwesomeIcon className=".pay-icon" icon={faDollarSign}></FontAwesomeIcon></button></li>
      <li><button><FontAwesomeIcon className=".pay-icon" icon={faGooglePay}></FontAwesomeIcon></button></li>
    </ul>
    </div>
       </div>
  </div>
  )
}
}
export default Payout;