export const DEPOSIT = "DEPOSIT";
export const WITHDRAW = "WITHDRAW";

export const deposit = sum => ({  // Принимает сумму, возвращает объект действия с типом и полезной нагрузкой (payload)
    type: DEPOSIT,
    payload: sum
})

export const withdraw = sum => ({  // Аналогично deposit, только тип действия другой
    type: WITHDRAW,
    payload: sum
})