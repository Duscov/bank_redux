// Импортируем типы действий
import { DEPOSIT, WITHDRAW } from "../actions/accountActions.js";
import { PUT_QUOTE } from "../actions/quoteAction.js";

// Редьюсер accountReducer — управляет состоянием аккаунта
export const accountReducer = (state, action) => {
    switch (action.type) {
        case DEPOSIT:
            // При депозите увеличиваем баланс на action.payload
            return { ...state, balance: state.balance + action.payload };

        case WITHDRAW:
            // При снятии денег уменьшаем баланс, но не уходим в минус
            return {
                ...state,
                balance: state.balance >= action.payload
                    ? state.balance - action.payload
                    : state.balance
            };

        case PUT_QUOTE:
            // Обновляем цитату в состоянии
            return {
                ...state,
                quote: action.payload
            };

        default:
            // Если action.type не известен, возвращаем текущее состояние
            return state;
    }
}
