import {DEPOSIT, WITHDRAW} from "../actions/accountActions.js";
import {PUT_QUOTE} from "../actions/quoteAction.js";

export const accountReducer = (state, action) => {
    switch (action.type) {
        case DEPOSIT:
            return {...state, balance: state.balance + action.payload};
        case WITHDRAW:
            return {
                ...state, balance: state.balance >= action.payload ?
                    state.balance - action.payload : state.balance
            };
        case PUT_QUOTE:
            return {
                ...state,
                quote: action.payload
            }
        default:
            return state;
    }
}