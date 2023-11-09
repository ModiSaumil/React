import { combineReducers } from "redux";
import reducer_qty from "./reducer_qty";
import reducer_qty1 from "./reducer_qty1";
import reducer_qty2 from "./reducer_qty2";
import reducer_rs from "./reducer_rs"
import reducer_rs1 from "./reducer_rs1"
import reducer_rs2 from "./reducer_rs2"


const combine_reducer = combineReducers({
    qty:reducer_qty,
    qty1:reducer_qty1,
    qty2:reducer_qty2,
    rs:reducer_rs,
    rs1:reducer_rs1,
    rs2:reducer_rs2
})

export default combine_reducer