const cartList= (state = [], action) =>{
    switch(action.type){
        case 'ADD_MEAL' :
            return {...state,
                cartList: [...state, action.payload]
            };
        case 'REMOVE_MEAL ' :
            return state.pop(action.payload);
        default:
            return state;
    }
    
    }
    export default cartList;