import { accountReducer } from "../reducer/accountReducer.js";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { thunk } from "redux-thunk";
import { logger } from "redux-logger/src";

// Начальное состояние стора
const initialStore = {
    balance: 0,                     // стартовый баланс
    quote: "Winter is coming..."    // стартовая цитата
};

// Создаём Redux store
// applyMiddleware подключает thunk (для async actions) и logger (для дебага)
export const store = createStore(
    accountReducer,    // редьюсер, управляющий состоянием
    initialStore,      // начальное состояние
    applyMiddleware(thunk, logger) // подключаем middleware
);
