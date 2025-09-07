import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {deposit, withdraw} from "../features/account/balanceSlice.js";
import {fetchQuote} from "../features/api/fetchQuote.js";

const Operation = () => {
    const [sum,setSum] = useState(0)
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={()=>dispatch(withdraw(sum))}>Withdraw</button>


            <input type={'number'}
                   onChange={e=> setSum(+e.target.value)}
                   value={sum} />


            <button onClick={()=>dispatch(deposit(sum))}>Deposit</button>

            <div>
                <button onClick={()=>dispatch(fetchQuote())}>Get Quote</button>
            </div>
        </div>
    );
};

export default Operation;