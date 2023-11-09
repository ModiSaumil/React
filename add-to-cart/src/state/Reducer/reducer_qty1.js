const reducer1 = (state=0,action)=>{
    if(action.type === "add1"){
        return state + action.payload
    }
    else if(action.type === "sub1"){
        return state - action.payload
    }else{
        return state;
    }
}

export default reducer1