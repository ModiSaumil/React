import {combineReducers} from "redux";
import amountReducer from "./amount_reducer";

// console.log(amountReducer)

const reducers = combineReducers({
    amount:amountReducer
})

export default reducers