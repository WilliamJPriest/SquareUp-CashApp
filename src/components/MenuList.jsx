import React, {useState,useEffect} from "react";
import '../styles/FoodCart.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faTrashCan,faHeart } from "@fortawesome/free-solid-svg-icons";
import { faApplePay,faGooglePay } from "@fortawesome/free-brands-svg-icons";
import {useDispatch} from "react-redux"
import { increment,decrement,addMeal,removeMeal } from "../actions";

function MenuList(props){
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) =>{
    console.log("i'm adding food " +JSON.stringify(cart)+ JSON.stringify(item));
    setCart({cart: (cart,{ ...1, 
  //   foodId : value.foodId ,
  // foodMenu :  value.foodMenu,
  // price :  value.price,
  // menuImg :  value.menuImg,
 })})
}
      return (
        <>
      {
     props.foodArray.map((item, index) => {
        //   props.setState({menu:(this.state.menu,{ ...1, 
        //     foodId : object.foodId ,
        //     foodMenu : object.foodMenu,
        //     price : object.price,
        //     menuImg : object.menuImg,
        // })})
        return(
              <div 
                key={item.foodId}
                className="menu-item"
                value={item.foodMenu}
                
               >
                <h5>{item.foodMenu}</h5>
                <img src={item.menuImg} alt="" /> 
                <button onClick={(value) => 
                  // console.log("i'm adding food " +JSON.stringify(item.foodMenu)+"JSON.stringify(cart)+ JSON.stringify(item)")
                  {
                  setCart(cart => [...cart, { 
                  foodId : item.foodId ,
                foodMenu :  item.foodMenu,
                price :  item.price, 
                menuImg :  item.menuImg,
               }])
               console.log(cart);
               }
                } style={{top: "60%",
                left: "65%",
                paddingLeft: "20%",
                zIndex: 100,
                // position: "relative",
                }}>+</button>
                <button 
                value={item.foodMenu}
                onClick={(value) => 
                  // console.log("i'm adding food " +JSON.stringify(item.foodMenu)+"JSON.stringify(cart)+ JSON.stringify(item)")
                  {
                  setCart(cart => cart.filter((_, i) => i !== (item.foodId+(+1))))
               console.log((item.foodId+(+1)));
               }
                } style={{top: "60%",
                  left: "-65%",
                  zIndex: 100,
                  // position: "absolute",
                  }}>--</button>
                </div>
                )
               })
               }
               </>
  )
}
export default MenuList;



// <div class="menu-items d-flex justify-content-around flex-wrap">
//         <div class="menu-item text-center">
//             <a href="/menu-items/shack-fries/loaded-bbq-shack-fries/">
//                     <img class="shadow" alt="Loaded BBQ Shack Fries" data-src="/media/2209/shanes-2-1-21319078.jpg?width=494&amp;height=392&amp;mode=crop&amp;center=0.5125,0.505&amp;overlay=image-frame.png&amp;overlay.position=0,0&amp;overlay.size=494,392&amp;quality=80" width="350" height="256" src="/media/2209/shanes-2-1-21319078.jpg?width=494&amp;height=392&amp;mode=crop&amp;center=0.5125,0.505&amp;overlay=image-frame.png&amp;overlay.position=0,0&amp;overlay.size=494,392&amp;quality=80">
//                 <h3 class="dish-name black">Loaded BBQ Shack Fries</h3>
//             </a>
//             <p class="price"><sup>$</sup>7.99</p>
//             <a class="btn-link black underline" href="/menu-items/shack-fries/loaded-bbq-shack-fries/">More Info &gt;</a>
//         </div>
//         <div class="menu-item text-center">
//             <a href="/menu-items/shack-fries/loaded-buffalo-shack-fries/">
//                     <img class="shadow" alt="Loaded Buffalo Shack Fries" data-src="/media/2208/shanes-4-8-21324078.jpg?width=494&amp;height=392&amp;mode=crop&amp;center=0.51125,0.49833333333333335&amp;overlay=image-frame.png&amp;overlay.position=0,0&amp;overlay.size=494,392&amp;quality=80" width="350" height="256" src="/media/2208/shanes-4-8-21324078.jpg?width=494&amp;height=392&amp;mode=crop&amp;center=0.51125,0.49833333333333335&amp;overlay=image-frame.png&amp;overlay.position=0,0&amp;overlay.size=494,392&amp;quality=80">
//                 <h3 class="dish-name black">Loaded Buffalo Shack Fries</h3>
//             </a>
//             <p class="price"><sup>$</sup>7.99</p>
//             <a class="btn-link black underline" href="/menu-items/shack-fries/loaded-buffalo-shack-fries/">More Info &gt;</a>
//         </div>
//                                     </div>