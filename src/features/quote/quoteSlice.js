// Импортируем createSlice из Redux Toolkit — это современный способ создавать редьюсеры и actions
import { createSlice } from "@reduxjs/toolkit";

// Создаём slice для цитат
const quoteSlice = createSlice({
    name: 'quote',                     // имя слайса, используется в action.type
    initialState: "Winter in coming ...", // начальное состояние (строка)
    reducers: {
        // putQuote — редьюсер для обновления цитаты
        // state — текущее состояние
        // action.payload — новая цитата
        // В Toolkit можно прямо возвращать новое значение (immer под капотом)
        putQuote: (state, action) => action.payload
    }
});

// Экспортируем action creator (putQuote)
export const { putQuote } = quoteSlice.actions;

// Экспортируем редьюсер для подключения в store
export default quoteSlice.reducer;
