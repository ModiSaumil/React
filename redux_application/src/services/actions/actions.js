import { ADD_TO_CART,REMOVE_TO_CART } from "../constant"

export const addtocart = (data) =>{
    // console.warn("action")
    return {
        type: ADD_TO_CART,
        data:data
    }
}

export const removetocart = () =>{
    console.warn("action")
    return {
        type: REMOVE_TO_CART,
    }
}
