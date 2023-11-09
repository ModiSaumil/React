const reducer_rs2 = (state=0,action)=>{
    if(action.type === "addrs2"){
        return state + action.payload
    }
    else if(action.type === "subrs2"){
        return state - action.payload
    }else{
        return state;
    }
}

export default reducer_rs2