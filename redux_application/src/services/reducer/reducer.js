import { ADD_TO_CART, REMOVE_TO_CART } from "../constant"

const initialState = {
    carddata: []
}
export default function cardItems(state = [], action) {
    switch (action.type) {
        case ADD_TO_CART:
            // console.warn(action)
            return [
                ...state,
                { carddata: action.data }
            ]
            break;

        case REMOVE_TO_CART:
            state.pop();
            return [
                ...state,
                
            ];
            break;

        default:
            return state;
    }
}