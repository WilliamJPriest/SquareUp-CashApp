import cartCount from "./cartCount.js"
import cartList from "./cartList.js"
import menusList from "./menus.js"


import {combineReducers} from "redux"

const rootReducer= combineReducers({
    cartCount,
    cartList,
    menusList,
});

export default rootReducer;