import { decrementCounter } from "./actions"

export const myLoggerMiddleware = store => next => action => {
    console.log(`myLoggerMiddleware log. Action type: ${action.type}`)
    return next(action)
}

// The code above is equal to:
// export function myLoggerMiddleware(store) {
//     return (next) => {
//         return (action) => {
//             console.log(`myLoggerMiddleware log. Action type: ${action.type}`)
//             return next(action)
//         }
//     }
// }

export const secondMiddleware = store => next => action => {
    console.log(`secondMiddleware log :)`)
    next(action)
}

export const capAt10Middleware = store => next => action => {
    if (store.getState().count >= 10) {
        console.log(`counter can not be more then 10. sending decriment action`)
        return next(decrementCounter())
    }
    next(action)
}
