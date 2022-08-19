export const increment = ir => {
    return {
        type: "INCREMENT",
        payload: ir
    };
}
export const decrement = dr => {
    return {
        type: "DECREMENT",
        payload: dr
    };
}
export const addMeal = (nr) => {
    return {
        type: "ADD_MEAL",
        payload: str
    };
}
export const removeMeal = rem => {
    return {
        type: "REMOVE_MEAL",
        payload: dr
    };
}
export const foodMenu = async () => {
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php", {
          method: "GET",
        });
        const data = await response.json();
          return{
            type: "FOOD_MENU",
            payload: data.data,
          };
}
