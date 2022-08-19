const menusList= (state = [], action) =>{
    switch(action.type){
        case 'FOOD_MENU' :
            return {...state,
                cartList: [...state, action.payload]
            };
            default:
            return state;
    }
    
    }
    export default menusList;