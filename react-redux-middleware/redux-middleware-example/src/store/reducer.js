import { COUNTER_DECREMENT, COUNTER_INCREMENT } from "./actions";

export const counterInitialState = {
    count: 0
}

export default function counterReducer(state = counterInitialState, action) {

    switch(action.type) {
        case COUNTER_INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        case COUNTER_DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        default:
            return state
    }

}