const reducer_rs1 = (state=0,action)=>{
    if(action.type === "addrs1"){
        return state + action.payload
    }
    else if(action.type === "subrs1"){
        return state - action.payload
    }else{
        return state;
    }
}

export default reducer_rs1