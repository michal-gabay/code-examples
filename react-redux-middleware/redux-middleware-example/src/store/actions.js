export const COUNTER_INCREMENT = "INCREMENT"
export const COUNTER_DECREMENT = "DECREMENT"

export function incrementCounter() {
    return {
        type: COUNTER_INCREMENT
    }
}

export function decrementCounter() {
    return {
        type: COUNTER_DECREMENT
    }
}