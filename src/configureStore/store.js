import {accountReducer} from "../reducer/accountReducer.js";
import {createStore} from "redux";

const initialStore = {
    balance: 0
};

export const store = createStore(accountReducer, initialStore);