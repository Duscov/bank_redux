// Импортируем createSlice из Redux Toolkit — современный способ создавать редьюсеры и actions
import { createSlice } from "@reduxjs/toolkit";

// Создаём slice для управления балансом
const balanceSlice = createSlice({
    name: 'balance',   // имя слайса, используется в action.type
    initialState: 0,   // начальный баланс
    reducers: {
        // deposit — увеличивает баланс на сумму из action.payload
        deposit: (state, action) => state + action.payload,

        // withdraw — уменьшает баланс на сумму из action.payload
        withdraw: (state, action) => (state - action.payload) < 0 ? state : state - action.payload,

        // Redux Toolkit использует Immer, поэтому можно мутировать state напрямую,
        // но здесь мы возвращаем новое значение
    }
})

// Экспортируем action creators, чтобы можно было диспатчить действия
export const { deposit, withdraw } = balanceSlice.actions

// Экспортируем редьюсер для подключения в store
export default balanceSlice.reducer
