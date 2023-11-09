import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import reducers from "./Reducer/reducer_index"

export const storee = createStore(reducers,{},applyMiddleware(thunk))