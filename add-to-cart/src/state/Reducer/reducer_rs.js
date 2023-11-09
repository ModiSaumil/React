const reducer_rs = (state=0,action)=>{
    if(action.type === "addrs"){
        return state + action.payload
    }
    else if(action.type === "subrs"){
        return state - action.payload
    }else{
        return state;
    }
}

export default reducer_rs