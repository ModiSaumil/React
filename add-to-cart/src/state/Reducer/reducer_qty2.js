const reducer2 = (state=0,action)=>{
    if(action.type === "add2"){
        return state + action.payload
    }
    else if(action.type === "sub2"){
        return state - action.payload
    }else{
        return state;
    }
}

export default reducer2