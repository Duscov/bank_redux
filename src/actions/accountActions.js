export const DEPOSIT = "DEPOSIT";
export const WITHDRAW = "WITHDRAW";

export const deposit = sum => ({
    type: DEPOSIT,
    payload: sum
})

export const withdraw = sum => ({
    type: WITHDRAW,
    payload: sum
})