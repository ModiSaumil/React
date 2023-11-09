export const addqty = (qty) =>{
    return(dispatch)=>{
        dispatch({
            type:'add',
            payload: qty
        })
    }
}

export const subqty = (qty) =>{
    return(dispatch)=>{
        dispatch({
            type:'sub',
            payload: qty
        })
    }
}

export const addrs = (amount) =>{
    return(dispatch)=>{
        dispatch({
            type:'addrs',
            payload: amount
        })
    }
}

export const subrs = (amount) =>{
    return(dispatch)=>{
        dispatch({
            type:'subrs',
            payload: amount
        })
    }
}

// 2nd cart
export const addqty1 = (qty) =>{
    return(dispatch)=>{
        dispatch({
            type:'add1',
            payload: qty
        })
    }
}

export const subqty1 = (qty) =>{
    return(dispatch)=>{
        dispatch({
            type:'sub1',
            payload: qty
        })
    }
}

export const addrs1 = (amount) =>{
    return(dispatch)=>{
        dispatch({
            type:'addrs1',
            payload: amount
        })
    }
}

export const subrs1 = (amount) =>{
    return(dispatch)=>{
        dispatch({
            type:'subrs1',
            payload: amount
        })
    }
}

// 3rd Cart

export const addqty2 = (qty) =>{
    return(dispatch)=>{
        dispatch({
            type:'add2',
            payload: qty
        })
    }
}

export const subqty2 = (qty) =>{
    return(dispatch)=>{
        dispatch({
            type:'sub2',
            payload: qty
        })
    }
}

export const addrs2 = (amount) =>{
    return(dispatch)=>{
        dispatch({
            type:'addrs2',
            payload: amount
        })
    }
}

export const subrs2 = (amount) =>{
    return(dispatch)=>{
        dispatch({
            type:'subrs2',
            payload: amount
        })
    }
}




