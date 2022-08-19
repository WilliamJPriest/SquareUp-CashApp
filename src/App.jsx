import React, {useState,useEffect} from "react";
 import './styles/App.css';
import {BrowserRouter as Router, Routes, Route,Link} from "react-router-dom"
import { library } from '@fortawesome/fontawesome-svg-core';
import { faApplePay,faGooglePay } from '@fortawesome/free-brands-svg-icons';
import { faClock, faClone, faHeart, faAddressBook, faBriefcase,faBars ,faTimes,faDollarSign,faTrashCan,faArrowLeft,faBowlFood,faCutlery,faDrumstickBite,faHome,faAngleLeft,faAngleRight,faMoneyBillWave,faSmile,faCheck,faArrowTurnDown,faCartShopping, fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Card, Button, Drawer, Dropdown, Form, Input, Modal, Radio, Progress, Slider } from 'antd';
import 'antd/dist/antd.css';
import Home from './screens/Home';
import Login from './screens/Login';
import Menu from './screens/Menu'
import Recipes from './Recipes'
import Payout from './Payout'
import MyPaymentForm from './Pages/Payments'




library.add(fas, faClock, faClone,faHeart,faAddressBook, faBriefcase, faBars,faTimes,faDollarSign,faApplePay,faGooglePay,faTrashCan,faArrowLeft,faBowlFood,faCutlery,faHome,faDrumstickBite,faAngleLeft,faAngleRight,faMoneyBillWave,faSmile,faCheck,faArrowTurnDown,faCartShopping);

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state ={
      show: false,
      background: 1,
    }
    
    this.renderHome = this.renderHome.bind(this);
    this.renderMenu = this.renderMenu.bind(this);
    this.showRecipes = this.showRecipes.bind(this);
    this.updatePosition = this.updatePosition.bind(this);

    }
     updatePosition() {
      console.log( " hey")
      var height = document.documentElement.scrollHeight-document.documentElement.clientHeight;
      var winScroll = document.documentElement.scrollTop;
      var scrolled = winScroll/height
      console.log(height+" "+ winScroll+" "+ scrolled);
  if(winScroll >= 284 && winScroll < 828 ){
    var control= winScroll/284;
  //   document.getElementById('top-h5').style.right= control+0+'vw';
  //   document.getElementById('top-h1').style.left= control +49+'vw';
  //   document.getElementById('top-span').style.color= 'rgb(205, 80, 8)';
  //   document.getElementById('top-span').style.opacity= '1';
  }else if(winScroll < 284){
  //   document.getElementById('top-h5').style.right= winScroll-285+'vw';
  //   document.getElementById('top-h1').style.left= winScroll-315+'vw';
  //   document.getElementById('top-span').style.opacity= '0';
  }
    }
   

    componentDidMount() {
      window.addEventListener('scroll', this.updatePosition)
    //   () => {
    //     console.log( " hey")
    // })
    }
    renderHome(){
      this.setState({show: true})
    }
    renderMenu(){
      this.setState({show: true})

    }
    showRecipes(){
      this.setState({show: true})
    }
    
    render() {
  return (
    <div className='main'>
      <Router>
      <div className='navigations'>
      {/* <FontAwesomeIcon icon={faArrowLeft}/>  */}
      <img id="logo" src="./logo3.jpg" alt="" />
      <label id="logo-text" htmlFor="">Grill</label>
        <nav>

            <ul>
              <li><button><Link to="/"><FontAwesomeIcon icon={faHome}/> Home</Link></button></li>
              <li><button ><Link to="/menu"><FontAwesomeIcon icon={faDrumstickBite}/> Food Menu</Link></button></li>
              <li><button ><Link to="/recipes"><FontAwesomeIcon icon={faBowlFood}/> Recipes</Link></button></li>
              <li><button ><Link to="/payments"><FontAwesomeIcon icon={faBowlFood}/> Payments</Link></button></li>
              <li><button ><Link to="/login"><FontAwesomeIcon icon={faBowlFood}/> Login</Link></button></li>
              {/* <li><button ><Link to="/signup"><FontAwesomeIcon icon={faBowlFood}/> Sign Up</Link></button></li> */}

            </ul>
        </nav>
      </div>
        <div className='gateway'>
          {/* <h1>Order Confirmation </h1> */}
             <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/menu" element={<Menu/>}></Route>
                <Route path="/recipes" element={<Recipes/>}></Route>
                <Route path="/payout" element={<Payout/>}></Route>
                <Route path="/payments" element={<MyPaymentForm/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                {/* <Route path="/signUp" element={<SignUp/>}></Route> */}
                </Routes>
            </div>
            </Router>
       </div>
  );
}
}

export default App;
