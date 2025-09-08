// Импортируем функцию для конфигурации стора из Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";
// Импортируем редьюсеры (slice) — они управляют частями состояния
import balance from "../features/account/balanceSlice.js";
import quote from "../features/quote/quoteSlice.js";

// Создаём и экспортируем стор
// configureStore упрощает создание Redux store:
// - автоматически подключает Redux DevTools
// - добавляет thunk для асинхронных действий
export const store = configureStore({
    reducer: {
        balance, // редьюсер для управления балансом
        quote    // редьюсер для управления цитатой
    }
})
