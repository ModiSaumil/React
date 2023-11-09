import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index"


const Shop = () => {
    const dispatch = useDispatch();
    const { WithdrawMoney, DepositMoney } = bindActionCreators(actionCreators, dispatch);
    const Balance = useSelector(state => state.amount)


    const withdraw = () => {
        if (Balance > 0) {
            WithdrawMoney(100)
        }
    }

    const Deposit = () => {
        DepositMoney(100)
    }

    return (
        <>
            <center>
                <h1>Deposit/Withdraw Money</h1></center>
            <div className="d-flex justify-content-center align-items-center mt-3">
                {/* <button className="btn btn-primary fs-2" onClick={()=>{dispatch(actionCreators.WithdrawMoney(100))}}>-</button>
                <h3 className="ms-5 me-5">Update Balance</h3>
                <button className="btn btn-primary fs-2" onClick={()=>{dispatch(actionCreators.DepositMoney(100))}}>+</button> */}
                <button className="btn btn-primary fs-2" onClick={withdraw}>-</button>
                <h3 className="ms-5 me-5">Your Balance {Balance}</h3>
                <button className="btn btn-primary fs-2" onClick={Deposit}>+</button>
            </div>
        </>
    )
}

export default Shop;