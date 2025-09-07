import React, {useState} from 'react';
import {deposit, withdraw} from "../actions/accountActions.js";
import {useDispatch} from "react-redux";
import {fetchQuote} from "../actions/quoteAction.js";

const Operation = () => {
    const [sum, setSum] = useState(0);
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(withdraw(sum))}>Withdraw</button>
            <input type={'number'}
                   onChange={e => setSum(+e.target.value)}
                   value={sum}/>
            <button onClick={() => dispatch(deposit(sum))}>Deposit</button>
            <div>
                <button onClick={() => dispatch(fetchQuote())}>Get Quote</button>
            </div>

        </div>
    );
};

export default Operation;