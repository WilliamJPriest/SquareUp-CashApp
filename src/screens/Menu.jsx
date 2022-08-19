import React from "react";
import Checkout from '../screens/Checkout';
import FoodCart from '../components/FoodCart';
import MenuList from '../components/MenuList'

const foodArray = [
    {
      "foodId" : 1 ,
      "foodMenu" : "BBQ Chicken",
      "price" : 35,
      "menuImg" : "./menu2.jpg",

  },{
      "foodId" : 2 ,
      "foodMenu" : "Burgers",
      "price" : 22,
      "menuImg" : "./menu3.jpg",
      
  },{
    "foodId" : 3 ,
    "foodMenu" : "Shawarma",
    "price" : 15,
    "menuImg" : "./menu4.jpg",
    
},{
  "foodId" : 4 ,
  "foodMenu" : "Pork",
  "price" : 28,
  "menuImg" : "./food.jpg",
  
},{
  "foodId" : 5 ,
  "foodMenu" : "Sausages",
  "price" : 3,
  "menuImg" : "./menu2.jpg",
  
},{
  "foodId" : 6,
  "foodMenu" : "Wings",
  "price" : 25,
  "menuImg" : "./menu3.jpg",
  
}, ]
class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
          counter:0,
          remove:0,
          cart: [],
          menu: {},
        }
        // this.handleAddToCart = this.handleAddToCart.bind(this);
        this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
        this.handleLike = this.handleLike.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        }
        
    //     handleAddToCart(){
    //         console.log("i'm adding food" )
    //       this.setState({cart: (this.state.cart,{ ...1, 
    //         foodId : this.state.menu.object.foodId ,
    //       foodMenu :  this.state.menu.object.foodMenu,
    //       price :  this.state.menu.object.price,
    //       menuImg :  this.state.menu.object.menuImg,
    //      })})
    //   }
      handleRemoveFromCart(){
        this.setState({cart: (this.state.cart.pop('card1'))})
    }
        handleLike(){
            this.setState({counter: (this.state.counter+1)})
            
        }
        handleDelete(){
          if(this.state.counter > 1){
            this.setState({counter: (this.state.counter-1)})
          }else if(this.state.counter === 1){
            this.setState({counter: 0 })
          }else{
            this.setState({counter: 0 }) 
          }
        }
        render() {
    return(
        <div className="menus">
         <FoodCart 
         cart={this.state.cart}
         counter={this.state.counter}
         remove={this.state.remove}
         handleAddToCart={this.handleAddToCart}
         handleLike={this.handleLike}
         handleDelete={this.handleDelete}
         foodArray={foodArray}
        //  cart={this.handleRemoveFromCart}
         />
         <Checkout 
        //  props={this.state}
         />
         
         <div className="menu-container">
          <div className="overflow-cover">   
         <MenuList 
            foodArray={foodArray}
            state={this.state}
            cart={this.state.cart}
            setState={this.setState}
            // handleAddToCart={this.handleAddToCart}
         />
       
          </div>
      
      </div>
        </div>
      
    )   
}
}
export default Menu;